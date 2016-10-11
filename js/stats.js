
class Stat {

    constructor(name, type, min, max, d, calc_val_fn) {

        this.name = name;
        this.type = type;
        this.min = min;
        this.max = max;
        this.d = d;
        this.calc_val = calc_val_fn;
        this.apply(0, 0);

    }

    apply(m, s) {
        this.m = m;
        this.s = s;

        let a = 10 * m + 3 * s;
        let tmp = 0.09 * a;
        let x = (0.99 * a - tmp * tmp) / this.d;
        this.calc_val(x);
        //    this.perc = (this.val - this.min) / (this.max - this.min) * 100;
    }

}

//Move all data, as far as possible, to a single JSON file

class StatSet {

    constructor(inkling) {

        this.damage = new Stat("Damage", "%", 0, 130, 100, function (x) {
            this.value = Math.min(this.max, 100 + 100 * x);
        });

        this.damage_taken = new Stat("Damage Taken", "%", 70, 100, 100, function (x) {
            this.value = Math.max(this.min, 100 * (1 - x / 1.8));
        });

        this.ink_recovery = new Stat("Ink Recovery", "s", 1.65, 3, 200 / 3, function (x) {
            this.value = Math.max(this.min, 3 * (1.0 - x));
        });

        this.ink_usage_main = new Stat("Ink Usage Main", "%", 55, 100, (200 / 3), function (x) {
            this.value = Math.max(this.min, 100 - 100 * x);
        });

        this.ink_usage_sub = new Stat("Ink Usage Sub", "%", 65, 100, 600 / 7, function (x) {
            this.value = Math.max(this.min, 100 - 100 * x);
        });

        this.bomb_throw_range = new Stat("Bomb Throw Range", "%", 0, 150, 60, function (x) {
            this.value = Math.min(this.max, (156.8 * (1 + x)) / 156.8 * 100);
        });

        this.run_speed = new Stat("Run Speed", "%", 0, 150, 60, function (x) {
            this.value = Math.min(this.max, (96 * (1 + x)) / 96 * 100);
        });

        this.swim_speed = new Stat("Swim Speed", "%", 100, 125, 120, function (x) {

            if (inkling.hasPenalty() && inkling.hasNinja()) {
                this.min = 75;
            } else if (inkling.hasPenalty() || inkling.hasNinja()) {
                this.min = 90;
            } else this.min = 100;
            this.value = Math.min(this.max, (192 * (1 + x)) / 192 * this.min);
        });

        this.special_charge = new Stat("Special Charge", "%", 0, 130, 100, function (x) {
            this.value = Math.min(this.max, 100 + 100 * x);
        });

        this.special_time = new Stat("Special Time", "%", 0, 140, 75, function (x) {
            this.value = Math.min(this.max, 100 + 100 * x);
        });

        this.special_save = new Stat("Special Save", "%", 0, 100, 60, function (x) {
            if (inkling.weapon.depletion == 'Light') {
                this.min = 60;
            } else if (inkling.weapon.depletion == 'Heavy') {
                this.min = 25;
            } else {
                this.min = 40;
            }
            this.value = Math.min(this.max, this.min + 100 * x);
        });

        this.respawn_rate = new Stat("Respawn Rate", "s", 2, (360 + 30 + 120) / 60, 45, function (x) {
            this.value = Math.max(this.min, ((1.0 - x) * 360 + 30 + 120) / 60);
        });

        this.jump_speed = new Stat("Jump Speed", "s", 2.41, 4.83, 60, function (x) {
            var a = 20 + 60 * (1 - x);
            var b = 130 * (1 - x);
            var c = 30;
            if (inkling.hasStealth()) c = 80;
            this.value = Math.max(this.min, (a + b + c) / 60);
        });

        this.echo_haunt_time = new Stat("Echolocator/Haunt Duration", "s", 4.5, 9, 1, function (x) {
            this.value = x > 0 ? 4.5 : 9;
        });

    }
}

exports.StatSet = StatSet;