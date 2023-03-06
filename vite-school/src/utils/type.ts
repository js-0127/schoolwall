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
export interface RegisterType {
    name: string;
    password: string;
    email: string;
    secondpass: string;
    identify: string;
}

export interface RulesType {
    name: ({
        required: boolean,
        message: string,
        trigger: string
    } | {
        min: number,
        max: number,
        message: string,
        trigger: string
    })[],
    email: ({
        type: string,
        required: boolean,
        message: string,
        trigger: string
    })[],
    password: ({
        required: boolean,
        message: string,
        trigger: string
    } | {
        min: number,
        max: number,
        message: string,
        trigger: string
    })[],
    secondpass: ({
        validator: (rule: RulesType, value: any, callback: any) => void,
        trigger: string
    })[]
}