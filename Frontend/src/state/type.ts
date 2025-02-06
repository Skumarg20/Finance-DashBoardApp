export interface ExpensesByCategory{
    salaries:number;
    supplies:number;
    services:number;
}
export interface Month{
    id:string;
    month:string;
    revenue:number;
    expenses:number;
    nonOprationalExpenses:number;
    operationalExpenses:number;

}
export interface Day{
    id:string;
    date:string;
    revenue:string;
    expenses:string;
}

export interface GetKpisResponse{
    id:string;
    _id:string;
    __v:number;
    totalProfit:number;
    totalRevenue:number;
    totalExpense:number;
    expensesByCategory:ExpensesByCategory,
    monthlyData:Array<Month>;
    dailyData:Array<Day>;
    createdAt:string;
    updatedAt:string;
}

export interface GetProductResponse{
    id:string;
    _id:string;
    __v:number;
    price:number;
    expense:number;
    transactions:Array<string>;
    createdAt:string;
    updatedAt:string;
}

export interface GetTransactionsResponse{
    id:string;
    _id:string;
    __v:number;
    buyer:string;
    amount:number;
    productIds:Array<string>
    createdAt:string;
    updatedAt:string;
    
}