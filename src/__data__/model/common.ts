export type GigaChatMessage = {
    message: string
}

export type RecordsData = {
    dates?: Date[]
    specialists?: Specialist[]
}

export type Date = {
    date: string
}

export type Specialist = {
    name: string
}

export type ResultsData = {
    titles?: ResultsTitle[]
}

export type ResultsTitle = {
    id: bigint
    name: string
    flag: boolean
}

export type SubmitData = {
    formData?: FormData[]
}

export type FormData = {
    name: string
    phone: string
    date: string
    time: string
    specialist: string
}

//в ответе надо будет отдавать User[], судя по json
export type User = {
    name: string
    email: string
}

export type TestData = {
    options: Option[]
    tests: Test[]
    titles: TestTitle[]
}

export type Option = {
    text: string
    count: bigint
}

export type Test = {
    questions: string[]
    results: TestResult[]
}

export type TestResult = {
    title: string
    description: string
}

export type TestTitle = {
    id: bigint
    name: string
    executionTime: number
    filter: string
}

export type DefaultResponse = {
    success: boolean
    message: string
}

export type SubmitForm = {
    email: string
    password: string
}

export type SubmitFormResponse = {
    status: string
    user?: User
    message?: string
}

export type BaseResponse<Data> = {
    success: true
    body?: Data
} | {
    success: false
    error: string
}