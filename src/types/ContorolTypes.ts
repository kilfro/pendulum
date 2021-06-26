interface IControlOption {
    description: string,
    min: number,
    max: number,
    step?: number,
    value: string | number | undefined,
    set: (value: string) => void,
}

export interface IControlMap {
    [key: string]: IControlOption
}