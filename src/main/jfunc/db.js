// db sender
export default {
    arrbase: [
        // Поставщики
        "CREATE table IF NOT EXISTS catalog_suppliers (id INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE, addr TEXT);",
        // Клиенты
        "CREATE table IF NOT EXISTS catalog_customers (id INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE, addr TEXT);",
        // Продукция
        "CREATE table IF NOT EXISTS catalog_products (id INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE, description TEXT);",
        // Поступления
        "CREATE table IF NOT EXISTS docs_incomes (id INTEGER PRIMARY KEY, date TEXT NOT NULL, provider_id INTEGER NOT NULL, product_id INTEGER NOT NULL, quantity INTEGER NOT NULL, price INTEGER NOT NULL);",
        // Реализации
        "CREATE table IF NOT EXISTS docs_implementations (id INTEGER PRIMARY KEY, date TEXT NOT NULL, customer_id INTEGER NOT NULL, incomes TEXT NOT NULL);",


    ],
    callback(err, all) {
        //
    },
    sendIsNotFound(db){
        let th = this
        db.all(th.arrbase.join(' '), function(err, all) {
            th.callback(err, all)
        })
    },
    sendTestData(db){
        let obj = [
            "INSERT INTO catalog_suppliers (name, addr) VALUES ('Мокрушин', 'Реста');",
            "INSERT INTO catalog_suppliers (name, addr) VALUES ('Сонечко', 'Синема');",
            "INSERT INTO catalog_customers (name, addr) VALUES ('Тавернетта', 'ул. Екатерининская 234');",
            "INSERT INTO catalog_customers (name, addr) VALUES ('Дача', 'ул. Французский Бульвар 2б');",
            "INSERT INTO catalog_products (name, description) VALUES ('Мед пчелиный', 'банка 4.3 кг');",
            "INSERT INTO catalog_products (name, description) VALUES ('Мед липовый', 'банка 4.3 кг');",

            "INSERT INTO docs_incomes (date, provider_id, product_id, quantity, price) VALUES ('02.05.2019', 1, 1, 20.46, 19.79);",
            "INSERT INTO docs_incomes (date, provider_id, product_id, quantity, price) VALUES ('03.06.2019', 1, 1, 47.78, 23.25);",
            "INSERT INTO docs_incomes (date, provider_id, product_id, quantity, price) VALUES ('14.06.2019', 1, 1, 95.55, 21.15);",
        ]
        let th = this
        db.all(obj.join(' '), function(err, all) {
            th.callback(err, all)
        })
    }
}
