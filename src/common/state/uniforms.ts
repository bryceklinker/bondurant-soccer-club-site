import {UniformPart, UniformPurchaseOption, UniformSize} from './models';

export const UNIFORM_SIZES = [
    UniformSize.YXS,
    UniformSize.YS,
    UniformSize.YM,
    UniformSize.YL,
    UniformSize.AS,
    UniformSize.AM,
    UniformSize.AL,
    UniformSize.AXL,
    UniformSize.AXXL,
    UniformSize.AXXXL,
];

export const UNIFORM_PURCHASE_OPTIONS: Array<UniformPurchaseOption> = [
    {part: UniformPart.Kit, cost: 45, count: 1},
    {part: UniformPart.Jersey, cost: 30, count: 2},
    {part: UniformPart.Shorts, cost: 15, count: 1},
    {part: UniformPart.Socks, cost: 5, count: 1},
]
