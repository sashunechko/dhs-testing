import { Results } from './../../components/test/test.styled';
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
    email: string
    first_name: string
    second_name: string
    password: string
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