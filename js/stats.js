/**
 * Created by jimnarey on 09/10/16.
 */

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

var damageCalc = function(x) {
    this.value = Math.min(this.max, 100 + 100 * x);
};

var damageTakenCalc = function(x) {
    this.value = Math.max(this.min, 100 * (1 - x / 1.8));
};

var inkRecoveryCalc = function(x) {
    this.value = Math.max(this.min, 3 * (1.0 - x));
};

var inkUsageMainCalc = function(x) {
    this.value = Math.max(this.min, 100 - 100 * x);
};

var inkUsageSubCalc = function(x) {
    this.value = Math.max(this.min, 100 - 100 * x);
};

var bombThrowRangeCalc = function(x) {
    this.value = Math.min(this.max, (156.8 * (1 + x)) / 156.8 * 100);
};

var runSpeedCalc = function(x) {
    this.value = Math.min(this.max, (96 * (1 + x)) / 96 * 100);
};

var specialChargeCalc = function(x) {
    this.value = Math.min(this.max, 100 + 100 * x);
};

var specialTimeCalc = function(x) {
    this.value = Math.min(this.max, 100 + 100 * x);
};

var respawnRateCalc = function(x) {
    this.value = Math.max(this.min, ((1.0 - x) * 360 + 30 + 120) / 60);
};

var echoHauntTimeCalc = function(x) {
    this.value = x > 0 ? 4.5 : 9;
};

var jumpSpeedCalc = function(x) {
    var hasStealth = ($scope.mains.indexOf($scope.getAbilityByName("Stealth Jump")) != -1);
    var a = 20 + 60 * (1 - x);
    var b = 130 * (1 - x);
    var c = 30;
    if (hasStealth) c = 80;
    this.value = Math.max(this.min, (a + b + c) / 60);
};

var swimSpeedCalc = function(x) {
    var hasNinja = ($scope.mains.indexOf($scope.getAbilityByName("Ninja Squid")) != -1);
    var hasPenalty = ($scope.selectedWeapon.speedPenalty);
    if (hasPenalty && hasNinja) {
        this.min = 75;
    } else if (hasPenalty || hasNinja) {
        this.min = 90;
    } else this.min = 100;
    this.value = Math.min(this.max, (192 * (1 + x)) / 192 * this.min);
};

var specialSaveCalc = function(x) {
    if ($scope.selectedWeapon.depletion == 'Light') {
        this.min = 60;
    } else if ($scope.selectedWeapon.depletion == 'Heavy') {
        this.min = 25;
    } else {
        this.min = 40;
    }
    this.value = Math.min(this.max, this.min + 100 * x);
};

stats = [
    {name: "Damage", type: "%", min: 0, max: 130, d: 100, calc: damageCalc},
    {name: "Damage Taken", type: "%", min: 70, max: 100, d: 100, calc: damageTakenCalc},
    {name: "Ink Recovery", type: "s", min: 1.65, max: 3, d: (200/3), calc: inkRecoveryCalc},
    {name: "Ink Usage Main", type: "%", min: 55, max: 100, d: (200/3), calc: inkUsageMainCalc},
    {name: "Ink Usage Sub", type: "%", min: 65, max: 100, d: (600/7), calc: inkUsageSubCalc},
    {name: "Bomb Throw Range", type: "%", min: 0, max: 150, d: 60, calc: bombThrowRangeCalc},
    {name: "Run Speed", type: "%", min: 0, max: 150, d: 60, calc: runSpeedCalc},
    {name: "Swim Speed", type: "%", min: 100, max: 125, d: 120, calc: swimSpeedCalc},
    {name: "Special Charge", type: "%", min: 0, max: 130, d: 100, calc: specialChargeCalc},
    {name: "Special Time", type: "%", min: 0, max: 140, d: 75, calc: specialTimeCalc},
    {name: "Special Save", type: "%", min: 0, max: 100, d: 60, calc: specialSaveCalc},
    {name: "Respawn Rate", type: "s", min: 2, max: (360 + 30 + 120) / 60, d: 45, calc: respawnRateCalc},
    {name: "Jump Speed", type: "s", min: 2.41, max: 4.83, d: 60, calc: jumpSpeedCalc},
    {name: "Echolocator/Haunt Duration", type: "s", min: 4.5, max: 9, d: 1, calc: echoHauntTimeCalc},
];

old_stats = [
    new Stat("Damage", "%", 0, 130, 100, function(x) {
        this.value = Math.min(this.max, 100 + 100 * x);
    }),
    new Stat("Damage Taken", "%", 70, 100, 100, function(x) {
        this.value = Math.max(this.min, 100 * (1 - x / 1.8));
    }),
    new Stat("Ink Recovery", "s", 1.65, 3, 200 / 3, function(x) {
        this.value = Math.max(this.min, 3 * (1.0 - x));
    }),
    new Stat("Ink Usage Main", "%", 55, 100, (200 / 3), function(x) {
        this.value = Math.max(this.min, 100 - 100 * x);
    }),
    new Stat("Ink Usage Sub", "%", 65, 100, 600 / 7, function(x) {
        this.value = Math.max(this.min, 100 - 100 * x);
    }),
    new Stat("Bomb Throw Range", "%", 0, 150, 60, function(x) {
        this.value = Math.min(this.max, (156.8 * (1 + x)) / 156.8 * 100);
    }),
    new Stat("Run Speed", "%", 0, 150, 60, function(x) {
        this.value = Math.min(this.max, (96 * (1 + x)) / 96 * 100);
    }),
    new Stat("Swim Speed", "%", 100, 125, 120, function(x) {
        var hasNinja = ($scope.mains.indexOf($scope.getAbilityByName("Ninja Squid")) != -1);
        var hasPenalty = ($scope.selectedWeapon.speedPenalty);
        if (hasPenalty && hasNinja) {
            this.min = 75;
        } else if (hasPenalty || hasNinja) {
            this.min = 90;
        } else this.min = 100;
        this.value = Math.min(this.max, (192 * (1 + x)) / 192 * this.min);
    }),
    new Stat("Special Charge", "%", 0, 130, 100, function(x) {
        this.value = Math.min(this.max, 100 + 100 * x);
    }),
    new Stat("Special Time", "%", 0, 140, 75, function(x) {
        this.value = Math.min(this.max, 100 + 100 * x);
    }),
    new Stat("Special Save", "%", 0, 100, 60, function(x) {
        if ($scope.selectedWeapon.depletion == 'Light') {
            this.min = 60;
        } else if ($scope.selectedWeapon.depletion == 'Heavy') {
            this.min = 25;
        } else {
            this.min = 40;
        }
        this.value = Math.min(this.max, this.min + 100 * x);
    }),
    new Stat("Respawn Rate", "s", 2, (360 + 30 + 120) / 60, 45, function(x) {
        this.value = Math.max(this.min, ((1.0 - x) * 360 + 30 + 120) / 60);
    }),
    new Stat("Jump Speed", "s", 2.41, 4.83, 60, function(x) {
        var hasStealth = ($scope.mains.indexOf($scope.getAbilityByName("Stealth Jump")) != -1);
        var a = 20 + 60 * (1 - x);
        var b = 130 * (1 - x);
        var c = 30;
        if (hasStealth) c = 80;
        this.value = Math.max(this.min, (a + b + c) / 60);
    }),
    new Stat("Echolocator/Haunt Duration", "s", 4.5, 9, 1, function(x) {
        this.value = x > 0 ? 4.5 : 9;
    })
];