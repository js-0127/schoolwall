export interface FormRules {
    confessorName: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[],
    confessorRegion: {
        required: boolean;
        trigger: string;
    }[],
    professedName: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[],
    description: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max?: number;
        message: string;
        trigger: string;
    })[]
}

export interface UserType {
    confessorName: string;
    confessorRegion: string;
    professedName: string;
    professedRegion: string;
    description: string;
    delivery: boolean;
    anoymity: boolean;
}