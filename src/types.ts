export interface IOptionGroupItem {
    title: string
    description: string
    colors: string[]
}

export interface IConfigOption {
    title: string
    options: IOptionGroupItem[]
}

export interface IConfig {
    title: string
    description: string
    options: IConfigOption[]
}
