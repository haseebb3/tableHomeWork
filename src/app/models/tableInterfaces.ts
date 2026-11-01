export interface Employee {
    empId: number;
    empName: string;
    designation: string;
    department: string;
    salary: number;
    isPermanent: boolean;
    email: string;
    contact: number;
}

export interface Student {
    rollNo: number;
    name: string;
    course: string;
    year: string;
    percentage: number;
    isPassed: boolean;
    email: string;
    contact: number;
}

export interface Product {
    prodId: number;
    prodName: string;
    category: string;
    price: number;
    stock: number;
    isAvailable: boolean;
    brand: string;
}

export interface Course {
    courseId: number;
    courseName: string;
    duration: string;
    fees: number;
    mode: string;
    isActive: boolean;
    trainer: string;
}