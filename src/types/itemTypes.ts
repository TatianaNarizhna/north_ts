
export type SqlQuery = {
    sql: string,
    sqlType: string,
    resultsCount: number,
    timeStart: string,
    timeTaken: number
}

export type EmployeeItem = {
    EmployeeID: number,
    LastName: string,
    FirstName: string,
    Title: string,
    TitleOfCourtesy: string,
    BirthDate: string,
    HireDate: string,
    Address: string,
    City: string,
    Region: string,
    PostalCode: string,
    Country: string,
    HomePhone: string,
    Extension: number,
    Notes: string,
    ReportsTo: number,
    reportsName: string
}

export type EmployeeItemResponse = {
    data: EmployeeItem[],
    sqlQueries: SqlQuery[]
}

export type SupplierItem = {
    SupplierID: number,
    CompanyName: string,
    ContactName: string,
    ContactTitle: string,
    Address: string,
    City: string,
    Region: string,
    PostalCode: string,
    Country: string,
    Phone: string,
    Fax: string,
    HomePage: string
}

export type SupplierItemResponse = {
    data: SupplierItem[],
    sqlQueries: SqlQuery[]
}

type CustomerItem = {
    CustomerID: string,
    CompanyName: string,
    ContactName: string,
    ContactTitle: string,
    Address: string,
    City: string,
    Region: string,
    PostalCode: string,
    Country: string,
    Phone: string,
    Fax: string
}

export type CustomerItemResponse = {
    data: CustomerItem[],
    sqlQueries: SqlQuery[]
}

export type ProductItem = {
    productName: string,
    supplierId: number,
    supplier: string,
    qtyPerUnit: string,
    unitPrice: number,
    unitsInStock: number,
    unitsInOrder: number,
    reorderLevel: number,
    discontinued: number
}

export type ProductItemResponse = {
    data: ProductItem[],
    sqlQueries: SqlQuery[]
}

export type OrderItem = {
    CustomerId: string,
    ShipName: string,
    TotalProductsDiscount: number,
    TotalProductsPrice: number,
    TotalProductsItems: number,
    TotalProducts: string,
    CompanyShipper: string,
    Freight: number,
    OrderDate: string,
    RequiredDate: string,
    ShippedDate: string,
    ShipCity: string,
    ShipRegion: string,
    PostalCode: string,
    ShipCountry: string
}

export type ProductsInOrder = {
    ProductName: string,
    ProductId: number,
    Quantity: number,
    OrderPrice: number,
    TotalPrice: number,
    Discount: number
}

export type OrderItemResponse = {
    orderInfo: ProductItem[],
    productsInfo: ProductsInOrder[],
    sqlQueries: SqlQuery[]
}