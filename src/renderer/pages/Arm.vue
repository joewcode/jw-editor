<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-2">
            <b-row class="my-1">
                <b-col sm="5">
                    <label for="forvs">Выборка с</label>
                </b-col>
                <b-col sm="7">
                    <b-form-input id="forvs" type="date" size="sm" v-model:value="searchDate.with"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col sm="5">
                    <label for="forvp">Выборка по</label>
                </b-col>
                <b-col sm="7">
                    <b-form-input id="forvp" type="date" size="sm" v-model="searchDate.before"></b-form-input>
                </b-col>
            </b-row>
        </div>

        <div class="col-2">
            <b-row class="my-1">
                <b-col sm="5">
                    <label for="seaprov">поставщик</label>
                </b-col>
                <b-col sm="7">
                    <b-input-group>
                        <b-input-group-prepend is-text>
                            <input type="checkbox" v-model="searchFlagProvider" aria-label="Checkbox">
                        </b-input-group-prepend>
                        <b-form-input id="seaprov" size="sm" aria-label="Text input"></b-form-input>
                    </b-input-group>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col sm="5">
                    <label for="seaprod">продукт</label>
                </b-col>
                <b-col sm="7">
                    <b-input-group>
                        <b-input-group-prepend is-text>
                            <input type="checkbox" v-model="searchTextProduct" aria-label="Checkbox">
                        </b-input-group-prepend>
                        <b-form-input id="seaprod" size="sm" aria-label="Text input"></b-form-input>
                    </b-input-group>
                </b-col>
            </b-row>
        </div>

        <div class="col-2">
            <b-row class="my-1">
                <b-button size="sm" @click="toLoadTable">Загрузить данные</b-button>
            </b-row>
            <b-row class="my-1">
                <b-button size="sm" @click="checkedToDelivery">Добавить отмеченные в заказ</b-button>
            </b-row>
        </div>

        <div class="col-2">
            <b-row class="my-1">
                <b-form-group label-cols-sm="3" label="Поиск" class="mb-0">
                    <b-input-group>
                        <b-form-input v-model="filter" size="sm" placeholder="Введите текст"></b-form-input>
                        <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''" size="sm">Очистить</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </b-row>
            <b-row class="my-1">
                ////..//..//..////
            </b-row>
        </div>





        с {{ searchDate.with }} по {{ searchDate.before }} .. продукт {{ searchTextProduct }}
    </div>
    <div class="row">
        <div class="col-8">
            <b-table
                show-empty
                striped
                bordered
                selectable
                select-mode="multi"
                selectedVariant="success"
                :items="items"
                :fields="fields"
                :busy="isBusy"
                :filter="filter"
                :current-page="currentPage"
                :per-page="perPage"
                @row-selected="rowSelected"
                @filtered="onFiltered"
            >
                <div slot="table-busy" class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Загрузка данных...</strong>
                </div>
            </b-table>
            <div class="row">
                <b-col sm="4">
                    <b-pagination v-model="currentPage" :total-rows="TotalRows" :per-page="perPage" class="my-0"></b-pagination>
                </b-col>
                <b-col sm="8">
                    Всего: <span>{{TotalRows}}</span>, на сумму {{allPrice}} грн, общий вес {{allQuantity}} кг.
                </b-col>
            </div>
        </div>
        <div class="col-4">
            <b-table
                show-empty
                striped
                bordered
                :items="preparedItems"
                :fields="fields2"
            >
            </b-table>

        </div>
    </div>

</div>
</template>
<script>


export default {
    data: () => ({
        isBusy: false,
        filter: null,
        searchDate: {with: '', before: ''},
        searchFlagProvider: false,
        searchFlagProduct: false,
        searchTextProvider: '',
        searchTextProduct: '',

        allQuantity: 0,
        allPrice: 0,


        // totalRows: 1,
        currentPage: 1,
        perPage: 5,


        items: [
            { id: 1, provider: 'Настя asd', delivered: '07.01.1990', name: 'Картошка жареная п/ф', quantity: 26.5, price: 0.25 },
            { id: 2, provider: 'Настя asdfa', delivered: '17.01.1990', name: 'Картошка ee п/ф', quantity: 36.5, price: 4.15 },
            { id: 3, provider: 'Настя asdfa', delivered: '17.01.1990', name: 'Картошка ee п/ф', quantity: 36.5, price: 4.15 },
            { id: 4, provider: 'Настя asdfa', delivered: '17.01.1990', name: 'Картошка ee п/ф', quantity: 36.5, price: 4.15 },
            { id: 5, provider: 'Настя asdfa', delivered: '17.01.1990', name: 'Картошка ee п/ф', quantity: 36.5, price: 4.15 },
            { id: 6, provider: 'Настя asdfa', delivered: '17.01.1990', name: 'Картошка ee п/ф', quantity: 36.5, price: 4.15 },

        ],
        fields: [
            { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
            { key: 'provider', label: 'Поставщик' },
            { key: 'delivered', label: 'Дата пос-ки', sortable: true, class: 'text-center' },
            { key: 'name', label: 'Название продукции', sortable: true },
            { key: 'quantity', label: 'Кол-во', sortable: true },
            { key: 'price', label: 'Цена', sortable: true },
        ],
        fields2: [
            { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
        //    { key: 'provider', label: 'Поставщик' },
            { key: 'name', label: 'Название продукции', sortable: true },
            { key: 'quantity', label: 'Кол-во', sortable: true },
            { key: 'price', label: 'Цена', sortable: true },
            { key: 'delivered', label: 'Дата пос-ки', sortable: true, class: 'text-center' },
        ],

        selectedItems: [],
        preparedItems: []

    }),
    created() {
        //
    },
    mounted(){
        // this.totalRows = this.items.length
        this.getDataFields()
    },
    methods: {
        toggleBusy() {
            this.isBusy = !this.isBusy
        },
        rowSelected(items) {
            this.selectedItems = items
        },
        toLoadTable() {
            this.toggleBusy()
            this.loadTable()
        },
        async loadTable() {
            try {
                const response = await axios.get('/', {params: { mod: 'get' }})
                console.log(response)
            } catch (error) {
                console.error(error)
            }
            this.toggleBusy()
        },
        toCreateDelivery() {

        },
        checkedToDelivery() {
            let selData = this.selectedItems
            if (selData.lenght < 1) return
            let newArr = this.preparedItems.concat(selData)
            // Удаляем выделеные с основной и добавляем в новую
            this.items = this.items.filter( ( el ) => !selData.includes( el ) )
            this.preparedItems = newArr
            this.getDataFields()
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            // this.totalRows = filteredItems.length
            this.currentPage = 1
        },
        getDataFields() {
            let q = 0
            let p = 0
            for (let i in this.items) {
                q+= this.items[i].quantity
                p+= this.items[i].price
            }
            this.allQuantity = q
            this.allPrice = p
        },
    },
    computed: {
        TotalRows() { return this.items.length },
    },
    components: {
    }
}
</script>
