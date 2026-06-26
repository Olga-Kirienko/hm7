// 1
function generateUserPayload(name: string, age: number, isPremium: boolean): string {
    return `User: ${name}, Age: ${age}, Premium: ${isPremium}`;
}

//2
interface UserData {
    "id": number,
    "email": string,
    "tags": string []
}


interface ApiResponse {
    "status": string,
    "data": UserData 
}

const  mockResponse: ApiResponse = {
    "status": "success",
    "data": {
        "id": 101,
        "email": "test@qa.com",
        "tags": ["e2e", "smoke"]
        // "tags": 3 подсвечивается красным
    }
} 

//3
type Environment = 'local' | 'stage' | 'prod';

function setApiUrl(env: Environment): string {
    if (env === 'local') {
        return 'http://localhost:3000';
    } else if (env === 'stage') {
        return 'https://stage.api.com';
    } else if (env === 'prod') {
        return 'https://api.com';
    } else {
        return 'unknown environment'
    }
}

console.log(setApiUrl('stage'));
// console.log(setApiUrl('test')); подсвечивается красным, собрались не зря!

//4
const fetchUser = async (): Promise<UserData> => {
    return { id: 1, email: "ts@cool.com", tags: ["api"] };
}

// задача со *
interface BaseResponse {
    timestamp: number,
    error?: string
}

interface LoginResponse extends BaseResponse {
    token: string
}

// если закомментировать timestamp, token, то response сразу подсветится и попросить добавить обязательное поле
// без error ничего не подсвечивается, значит error? верная запись
const response: LoginResponse = {
    timestamp: 123456,
    token: 'aaaaaa'
}

