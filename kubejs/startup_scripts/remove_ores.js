WorldgenEvents.remove( event => {
    event.removeOres(props => {
        props.worldgenLayer = 'underground_ores';
        props.blocks = [
            "indreb:tin_ore",
            "indreb:deepslate_tin_ore",
            "indreb:lead_ore",
            "indreb:deepslate_lead_ore",
            "indreb:uranium_ore",
            "indreb:deepslate_uranium_ore",
            "indreb:silver_ore",
            "indreb:deepslate_silver_ore",
            "easy_steel:cassiterite_ore",
            "easy_steel:cassiterite_ore_deepslate",
            "easy_steel:rutile_ore",
            "easy_steel:rutile_ore_deepslate",
            "easy_steel:wolframite_ore",
            "easy_steel:wolframite_ore_deepslate",
            "factorium:mat_tin_ore",
            "factorium:mat_tin_ore_deep",
            "factorium:mat_nickel_ore",
            "factorium:mat_nickel_ore_deep",
            "factorium:mat_lead_ore",
            "factorium:mat_lead_ore_deep",
            "factorium:mat_silver_ore",
            "factorium:mat_silver_ore_deep",
            "factorium:mat_silver_ore_end",
            "factorium:mat_platinum_ore",
            "factorium:mat_platinum_ore_deep",
            "factorium:mat_platinum_ore_end",
            "factorium:mat_platinum_ore_nether",
            "factorium:mat_zinc_ore",
            "factorium:mat_zinc_ore_deep",
            "assemblylinemachines:titanium_ore",
            "assemblylinemachines:deepslate_titanium_ore",
            "xycraft_world:aluminum_ore_stone",
            "xycraft_world:aluminum_ore_deepslate",
            "xycraft_world:aluminum_ore_kivi",
            'minecraft:copper_ore',
            'minecraft:gold_ore',
            'minecraft:iron_ore',
            'minecraft:diamond_ore',
            'minecraft:emerald_ore',
            'minecraft:redstone_ore',
            'minecraft:coal_ore',
            'minecraft:lapis_ore',
            'thermal:lead_ore',
            'thermal:nickel_ore',
            'thermal:niter_ore',
            'thermal:cinnabar_ore',
            'thermal:silver_ore',
            'thermal:tin_ore',
            'thermal:sulfur_ore',
            'thermal:apatite_ore',
            'rftoolsbase:dimshard_dimensions',
            'rftoolsbase:dimshard_end',
            'rftoolsbase:dimshard_nether',
            'rftoolsbase:dimshard_overworld',
            'mekanism:tin_ore',
            'mekanism:deepslate_tin_ore',
            'mekanism:osmium_ore',
            'mekanism:deepslate_osmium_ore',
            'mekanism:uranium_ore',
            'mekanism:deepslate_uranium_ore',
            'mekanism:lead_ore',
            'mekanism:deepslate_lead_ore'
        ];
    });

});