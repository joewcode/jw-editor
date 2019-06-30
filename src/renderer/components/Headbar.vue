<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Редактор БД</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item" active>
                <router-link :to="{ name : 'home' }" key="1" class="nav-link">Статистика</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name : 'arm' }" key="2" class="nav-link">АРМ</router-link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="ldirectories" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Справочники
                </a>
                <div class="dropdown-menu" aria-labelledby="ldirectories">
                    <router-link :to="{ name : 'suppliers' }" key="3" class="dropdown-item">Поставщики</router-link>
                    <router-link :to="{ name : 'customers' }" key="4" class="dropdown-item">Клиенты</router-link>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="ldocs" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Документы
                </a>
                <div class="dropdown-menu" aria-labelledby="ldocs">
                    <router-link :to="{ name : 'income' }" key="5" class="dropdown-item">Поступления ТМЦ</router-link>
                    <router-link :to="{ name : 'implementations' }" key="6" class="dropdown-item">Реализации ТМЦ</router-link>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="lreport" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Отчет
                </a>
                <div class="dropdown-menu" aria-labelledby="lreport">
                    <router-link :to="{ name : 'bysales' }" key="7" class="dropdown-item">По продажам</router-link>
                    <router-link :to="{ name : 'byreceipts' }" key="8" class="dropdown-item">По поступлениям</router-link>
                </div>
            </li>

        </ul>
        <div class="form-inline my-2 my-lg-0">
            <input v-model="textMessage" @keyup.enter="sendMessage" class="form-control mr-sm-2" type="search" placeholder="Введите текст" aria-label="Поиск">
            <button @click="sendMessage" class="btn btn-outline-success my-2 my-sm-0" type="button">Искать</button>
        </div>
    </div>
</nav>
</template>
<script>
export default {
    data() {
        return {
            textMessage: '',

        }
    },
    mounted() {
        //
    },
    methods: {
        async sendMessage() {
            try {
                const response = await axios.get()
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        //    this.messages.push(this.textMessage);
            this.textMessage = ''
        },
    }
}
</script>
