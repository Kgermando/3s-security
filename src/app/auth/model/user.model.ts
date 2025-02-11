export interface UserModel {
    id: number;
    fullname: string;
    email: string;
    phone: string;
    title: string;
    password: string;
    password_confirm: string;
    role: string;
    permission: string;
    status: boolean;
    signature: string;
    created_at: Date;
    updated_at: Date;
}