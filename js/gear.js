/**
 * Created by jimnarey on 09/10/16.
 */

const gear = [{"Show":false,"type":"Headgear","name":"Cycling Cap","ability":"Bomb Range Up","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Urchins Cap","ability":"Bomb Range Up","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Headgear","name":"Octoling Goggles","ability":"Bomb Range Up"},
    {"Show":false,"type":"Headgear","name":"Sun Visor","ability":"Bomb Range Up","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Headgear","name":"Pilot Goggles","ability":"Bomb Range Up","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Tennis Headband","ability":"Comeback","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Headgear","name":"Five-Panel Cap","ability":"Comeback","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Traditional Headband","ability":"Comeback"},
    {"Show":false,"type":"Headgear","name":"Paintball Mask","ability":"Comeback","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Squash Headband","ability":"Damage Up","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Samurai Helmet","ability":"Damage Up"},
    {"Show":false,"type":"Headgear","name":"Snorkel Mask","ability":"Damage Up","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Legendary Cap","ability":"Damage Up"},
    {"Show":false,"type":"Headgear","name":"Takoroka Mesh","ability":"Defense Up","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Headgear","name":"Cycle King Cap","ability":"Defense Up","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Headgear","name":"Power Mask","ability":"Defense Up"},
    {"Show":false,"type":"Headgear","name":"Splash Goggles","ability":"Defense Up","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Blowfish Bell Hat","ability":"Ink Recovery Up","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"White Headband","ability":"Ink Recovery Up","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Headgear","name":"Bike Helmet","ability":"Ink Recovery Up","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Headgear","name":"Short Beanie","ability":"Ink Saver (Main)","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Bamboo Hat","ability":"Ink Saver (Main)","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Studio Headphones","ability":"Ink Saver (Main)","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Jungle Hat","ability":"Ink Saver (Main)","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Jogging Headband","ability":"Ink Saver (Sub)","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Streetstyle Cap","ability":"Ink Saver (Sub)","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Headgear","name":"Designer Headphones","ability":"Ink Saver (Sub)","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Tinted Shades","ability":"Last-Ditch Effort","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Safari Hat","ability":"Last-Ditch Effort","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"18K Aviators","ability":"Last-Ditch Effort","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Headgear","name":"Visor Skate Helmet","ability":"Last-Ditch Effort","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Headgear","name":"B-ball Headband","ability":"Opening Gambit","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"SQUID GIRL Hat","ability":"Opening Gambit"},
    {"Show":false,"type":"Headgear","name":"Striped Beanie","ability":"Opening Gambit","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Headgear","name":"Squid-Stitch Cap","ability":"Opening Gambit","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Headgear","name":"Backwards Cap","ability":"Quick Respawn","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Retro Specs","ability":"Quick Respawn","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Headgear","name":"Straw Boater","ability":"Quick Super Jump","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Headgear","name":"Zekko Mesh","ability":"Quick Super Jump","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Bobble Hat","ability":"Quick Super Jump","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Headgear","name":"Golf Visor","ability":"Run Speed Up","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Hero Headset Replica","ability":"Run Speed Up"},
    {"Show":false,"type":"Headgear","name":"Tentacles Helmet","ability":"Run Speed Up","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"FishFry Visor","ability":"Special Charge Up","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Fake Contacts","ability":"Special Charge Up","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Headgear","name":"Squidvader Cap","ability":"Special Charge Up","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Headgear","name":"Camping Hat","ability":"Special Duration Up","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"White Arrowbands","ability":"Special Duration Up","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Jet Cap","ability":"Special Saver","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Two-Stripe Mesh","ability":"Special Saver","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Skate Helmet","ability":"Special Saver","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Headgear","name":"Lightweight Cap","ability":"Swim Speed Up","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Camo Mesh Cap","ability":"Swim Speed Up","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Squid Hairclip","ability":"Swim Speed Up"},
    {"Show":false,"type":"Headgear","name":"Stealth Goggles","ability":"Swim Speed Up","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Sporty Bobble Hat","ability":"Tenacity","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Headgear","name":"Black Arrowbands","ability":"Tenacity","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Armor Helmet Replica","ability":"Tenacity"},
    {"Show":false,"type":"Headgear","name":"Gas Mask","ability":"Tenacity","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Classic Straw Boater","ability":"Special Duration Up","Special Saver":"1/33","Quick Respawn":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Full Moon Glasses","ability":"Quick Super Jump","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Noise Cancelers","ability":"Quick Respawn","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Octoglasses","ability":"Last-Ditch Effort","Ink Saver (Sub)":"1/3.3","Ink Recovery Up":"1/33"},
    {"Show":false,"type":"Headgear","name":"Paisley Bandana","ability":"Ink Saver (Sub)","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Skull Bandana","ability":"Special Saver","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Soccer Headband","ability":"Tenacity","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Headgear","name":"Special Forces Beret","ability":"Opening Gambit","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Squid Nordic","ability":"Comeback","Special Saver":"1/33","Quick Respawn":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"Treasure Hunter","ability":"Ink Recovery Up","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Headgear","name":"CoroCoro Cap","ability":"Damage Up","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"CoroCoro Hoodie","ability":"Cold-Blooded","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Linen Shirt","ability":"Bomb Range Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Squidmark Sweat","ability":"Bomb Range Up","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Firefin Navy Sweat","ability":"Bomb Range Up","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Green-Check Shirt","ability":"Bomb Range Up","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Black Inky Rider","ability":"Bomb Range Up","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Sage Polo","ability":"Cold-Blooded","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Sky Blue Squideye","ability":"Cold-Blooded","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Clothes","name":"Anchor Sweat","ability":"Cold-Blooded","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Cycling Shirt","ability":"Cold-Blooded","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Dark Urban Vest","ability":"Cold-Blooded","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Navy College Sweat","ability":"Damage Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Part-Time Pirate","ability":"Damage Up","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Clothes","name":"Rockenberg Black","ability":"Damage Up","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Zink Layered LS","ability":"Damage Up","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Navy Striped LS","ability":"Damage Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"SQUID GIRL Tunic","ability":"Damage Up"},
    {"Show":false,"type":"Clothes","name":"Varsity Jacket","ability":"Damage Up","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Black 8-Bit FishFry","ability":"Defense Up","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Carnivore Tee","ability":"Defense Up","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Mint T-shirt","ability":"Defense Up","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Clothes","name":"Zekko Baseball LS","ability":"Defense Up","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Baby-Jelly Shirt","ability":"Defense Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Cycle King Jersey","ability":"Defense Up","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Clothes","name":"Retro Sweat","ability":"Defense Up","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Ivory Peaks Tee","ability":"Haunt","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Squidmark LS","ability":"Haunt","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Yellow Urban Vest","ability":"Haunt","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Octo Tee","ability":"Haunt"},
    {"Show":false,"type":"Clothes","name":"Vintage Check Shirt","ability":"Haunt","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Aloha Shirt","ability":"Ink Recovery Up","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Grape Tee","ability":"Ink Recovery Up","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Clothes","name":"Logo Aloha Shirt","ability":"Ink Recovery Up","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Rockenberg White","ability":"Ink Recovery Up","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"School Uniform","ability":"Ink Recovery Up"},
    {"Show":false,"type":"Clothes","name":"White Shirt","ability":"Ink Recovery Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Black Layered LS","ability":"Ink Saver (Main)","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Rainy-Day Tee","ability":"Ink Saver (Main)","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Red Vector Tee","ability":"Ink Saver (Main)","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Red-Check Shirt","ability":"Ink Saver (Main)","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"B-ball Jersey (Away)","ability":"Ink Saver (Sub)","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Blue Peaks Tee","ability":"Ink Saver (Sub)","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Round-Collar Shirt","ability":"Ink Saver (Sub)","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"White Tee","ability":"Ink Saver (Sub)","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Choco Layered LS","ability":"Ink Saver (Sub)","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Octoling Armor","ability":"Ink Saver (Sub)"},
    {"Show":false,"type":"Clothes","name":"Green Striped LS","ability":"Ninja Squid","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Shrimp-Pink Polo","ability":"Ninja Squid","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"School Jersey","ability":"Ninja Squid","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Zekko Hoodie","ability":"Ninja Squid","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"White Anchor Tee","ability":"Ninja Squid","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Basic Tee","ability":"Quick Respawn","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Tricolor Rugby","ability":"Quick Respawn","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Power Armor","ability":"Quick Respawn"},
    {"Show":false,"type":"Clothes","name":"Traditional Apron","ability":"Quick Respawn","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"White Striped LS","ability":"Quick Respawn","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Camo Zip Hoodie","ability":"Quick Respawn","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Retro Gamer Jersey","ability":"Quick Respawn","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Gray Vector Tee","ability":"Quick Super Jump","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"White Baseball LS","ability":"Quick Super Jump","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Yellow Layered LS","ability":"Quick Super Jump","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Black LS","ability":"Quick Super Jump","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Gray Mixed Shirt","ability":"Quick Super Jump","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Striped Shirt","ability":"Quick Super Jump","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Varsity Baseball LS","ability":"Recon","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"White 8-Bit FishFry","ability":"Recon","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Black Anchor Tee","ability":"Recon","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Green Cardigan","ability":"Recon","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Olive Ski Jacket","ability":"Recon","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Black Squideye","ability":"Run Speed Up","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Clothes","name":"Sailor-Stripe Tee","ability":"Run Speed Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Urchins Jersey","ability":"Run Speed Up","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Striped Rugby","ability":"Run Speed Up","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Layered Anchor LS","ability":"Run Speed Up","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Camo Layered LS","ability":"Special Charge Up","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Orange Cardigan","ability":"Special Charge Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Sunny-Day Tee","ability":"Special Charge Up","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Samurai Jacket","ability":"Special Charge Up"},
    {"Show":false,"type":"Clothes","name":"Armor Jacket Replica","ability":"Special Charge Up"},
    {"Show":false,"type":"Clothes","name":"Baseball Jersey","ability":"Special Charge Up","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Black Tee","ability":"Special Duration Up","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Pirate Stripe Tee","ability":"Special Duration Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Squid-Pattern Waistcoat","ability":"Special Duration Up","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Zink LS","ability":"Special Duration Up","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Berry Ski Jacket","ability":"Special Duration Up","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Green Zip Hoodie","ability":"Special Duration Up","Ink Recovery Up":"1/33","Ink Saver (Sub)":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"White Inky Rider","ability":"Special Duration Up","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Black Pipe Tee","ability":"Special Saver"},
    {"Show":false,"type":"Clothes","name":"White Layered LS","ability":"Special Saver","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"B-ball Jersey (Home)","ability":"Special Saver","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Green Tee","ability":"Special Saver","Ink Saver (Sub)":"1/33","Special Duration Up":"1/3.3"},
    {"Show":false,"type":"Clothes","name":"Layered Vector LS","ability":"Special Saver","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Shirt & Tie","ability":"Special Saver","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Splatfest Tee","ability":"Special Saver","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Black Baseball LS","ability":"Swim Speed Up","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Gray College Sweat","ability":"Swim Speed Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Squid-Stitch Tee","ability":"Swim Speed Up","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Clothes","name":"White Line Tee","ability":"Swim Speed Up"},
    {"Show":false,"type":"Clothes","name":"Hero Jacket Replica","ability":"Swim Speed Up"},
    {"Show":false,"type":"Clothes","name":"Mountain Vest","ability":"Swim Speed Up","Defense Up":"1/3.3","Damage Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Black Polo","ability":"Recon","Special Saver":"1/3.3","Special Charge Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Blue Sailor Suit","ability":"Bomb Range Up","Special Duration Up":"1/3.3","Ink Saver (Sub)":"1/33"},
    {"Show":false,"type":"Clothes","name":"FC Albacore","ability":"Damage Up","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Forest Vest","ability":"Ink Recovery Up","Defense Up":"1/3.3","Damage Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Forge Inkling Parka","ability":"Run Speed Up","Special Duration Up":"1/3.3","Ink Saver (Sub)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Forge Octarian Jacket","ability":"Haunt","Special Duration Up":"1/3.3","Ink Saver (Sub)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Fugu Tee","ability":"Swim Speed Up","Ink Saver (Sub)":"1/3.3","Ink Recovery Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Herbivore Tee","ability":"Ninja Squid","Ink Saver (Sub)":"1/3.3","Ink Recovery Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Krak-On 528","ability":"Run Speed Up","Swim Speed Up":"1/3.3","Defense Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Lumberjack Shirt","ability":"Ink Saver (Main)","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Pearl Tee","ability":"Ink Saver (Sub)","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Clothes","name":"Purple Camo LS","ability":"Bomb Range Up","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Reel Sweat","ability":"Special Duration Up","Special Saver":"1/3.3","Special Charge Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Reggae Tee","ability":"Special Saver","Quick Respawn":"1/3.3","Special Saver":"1/33"},
    {"Show":false,"type":"Clothes","name":"Rodeo Shirt","ability":"Quick Super Jump","Swim Speed Up":"1/3.3","Defense Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Slipstream United","ability":"Defense Up","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Squid Satin Jacket","ability":"Quick Respawn","Special Saver":"1/3.3","Special Charge Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Squidstar Waistcoat","ability":"Cold-Blooded","Swim Speed Up":"1/3.3","Defense Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"Striped Peaks LS","ability":"Quick Super Jump","Defense Up":"1/3.3","Damage Up":"1/33"},
    {"Show":false,"type":"Clothes","name":"White LS","ability":"Ink Recovery Up","Damage Up":"1/3.3","Ink Saver (Main)":"1/33"},
    {"Show":false,"type":"Clothes","name":"White Sailor Suit","ability":"Ink Saver (Main)","Special Duration Up":"1/3.3","Ink Saver (Sub)":"1/33"},
    {"Show":false,"type":"Clothes","name":"Zapfish Satin Jacket","ability":"Special Charge Up","Special Saver":"1/3.3","Special Charge Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Blue Slip-Ons","ability":"Bomb Range Up","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Pink Trainers","ability":"Bomb Range Up","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Shoes","name":"Tan Work Boots","ability":"Bomb Range Up","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Banana Basics","ability":"Bomb Sniffer","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Yellow Seahorses","ability":"Bomb Sniffer","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Pro Trail Boots","ability":"Bomb Sniffer","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Soccer Cleats","ability":"Bomb Sniffer","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Shoes","name":"Cyan Trainers","ability":"Damage Up","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Shoes","name":"Plum Casuals","ability":"Damage Up","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Blue Lo-Tops","ability":"Defense Up","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Squid-Stitch Slip-Ons","ability":"Defense Up","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Hunter Hi-Tops","ability":"Ink Recovery Up","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"White Seahorses","ability":"Ink Recovery Up","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Trail Boots","ability":"Ink Recovery Up","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Neon Sea Slugs","ability":"Ink Resistance Up","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Shoes","name":"Strapping Reds","ability":"Ink Resistance Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Red Hi-Tops","ability":"Ink Resistance Up","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Blue Moto Boots","ability":"Ink Resistance Up","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Orange Arrows","ability":"Ink Saver (Main)","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Red Hi-Horses","ability":"Ink Saver (Main)","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Power Boots","ability":"Ink Saver (Main)"},
    {"Show":false,"type":"Shoes","name":"Armor Boot Replica","ability":"Ink Saver (main)"},
    {"Show":false,"type":"Shoes","name":"Blueberry Casuals","ability":"Ink Saver (Sub)","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"School Shoes","ability":"Ink Saver (Sub)"},
    {"Show":false,"type":"Shoes","name":"LE Lo-Tops","ability":"Ink Saver (Sub)","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Strapping Whites","ability":"Ink Saver (Sub)","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Black Trainers","ability":"Quick Respawn","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Shoes","name":"Squink Wingtips","ability":"Quick Respawn","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Choco Clogs","ability":"Quick Respawn","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Moto Boots","ability":"Quick Respawn","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Red Slip-Ons","ability":"Quick Super Jump","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Hero Runner Replicas","ability":"Quick Super Jump"},
    {"Show":false,"type":"Shoes","name":"Red Work Boots","ability":"Quick Super Jump","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Acerola Rain Boots","ability":"Run Speed Up","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Oyster Clogs","ability":"Run Speed Up","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Purple Sea Slugs","ability":"Run Speed Up","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Shoes","name":"Gold Hi-Horses","ability":"Run Speed Up","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Traditional Sandals","ability":"Run Speed Up"},
    {"Show":false,"type":"Shoes","name":"Clownfish Basics","ability":"Special Charge Up","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Zombie Hi-Horses","ability":"Special Charge Up","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Punk Whites","ability":"Special Charge Up","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Turquoise Kicks","ability":"Special Charge Up","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Purple Hi-Horses","ability":"Special Duration Up","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Custom Trail Boots","ability":"Special Duration Up","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Samurai Shoes","ability":"Special Duration Up"},
    {"Show":false,"type":"Shoes","name":"White Arrows","ability":"Special Duration Up","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Cream Basics","ability":"Special Saver","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Octoling Boots","ability":"Special Saver"},
    {"Show":false,"type":"Shoes","name":"Red Sea Slugs","ability":"Special Saver","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Shoes","name":"Cream Hi-Tops","ability":"Stealth Jump","Defense Up":"1/33","Swim Speed Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Cherry Kicks","ability":"Stealth Jump","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Green Rain Boots","ability":"Stealth Jump","Damage Up":"1/33","Defense Up":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"Crazy Arrows","ability":"Stealth Jump","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Orange Lo-Tops","ability":"Swim Speed Up","Special Charge Up":"1/33","Special Saver":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"White Kicks","ability":"Swim Speed Up","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Black Seahorses","ability":"Swim Speed Up","Quick Respawn":"1/33","Quick Super Jump":"1/3.3"},
    {"Show":false,"type":"Shoes","name":"SQUID GIRL Shoes","ability":"Swim Speed Up"},
    {"Show":false,"type":"Shoes","name":"Blue Sea Slugs","ability":"Special Charge Up","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Shoes","name":"Bubble Rain Boots","ability":"Damage Up","Defense Up":"1/3.3","Damage Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Icy Down Boots","ability":"Stealth Jump","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
    {"Show":false,"type":"Shoes","name":"LE Soccer Cleats","ability":"Ink Resistance Up","Special Charge Up":"1/3.3","Special Duration Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Mawcasins","ability":"Ink Recovery Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Punk Cherries","ability":"Bomb Sniffer","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Punk Yellows","ability":"Special Saver","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Roasted Brogues","ability":"Defense Up","Run Speed Up":"1/3.3","Swim Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Shark Moccasins","ability":"Bomb Range Up","Ink Saver (Main)":"1/3.3","Run Speed Up":"1/33"},
    {"Show":false,"type":"Shoes","name":"Snowy Down Boots","ability":"Quick Super Jump","Ink Recovery Up":"1/3.3","Quick Super Jump":"1/33"},
];