// test

export default {
    json: {},

    callback(err, all) {
        this.json = all
    },
    armlist(db, conf){
        let th = this
        let srt = `SELECT
                        docs_incomes.date,
                        docs_incomes.quantity,
                        docs_incomes.price,
                        catalog_suppliers.name
                        catalog_suppliers.addr
                    FROM docs_incomes
                    LEFT JOIN catalog_suppliers ON docs_incomes.provider_id = catalog_suppliers.id
                    LEFT JOIN catalog_products ON docs_incomes.product_id = catalog_products.id;`
        db.all(srt, function(err, all) {
            th.callback(err, all)
        })
    },
    getArmlist(){
        return this.json;
    },

}
