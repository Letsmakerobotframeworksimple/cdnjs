import type { IDensity } from "../../Interfaces/Particles/IDensity";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class Density implements IDensity, IOptionLoader<IDensity> {
    get value_area(): number;
    set value_area(value: number);
    area: number;
    enable: boolean;
    factor: number;
    constructor();
    load(data?: RecursivePartial<IDensity>): void;
}
