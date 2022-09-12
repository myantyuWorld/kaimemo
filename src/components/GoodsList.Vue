<template>
    <div class="card mt-2 shadow">
        <div class="card-body">

            <div class="row">
                <h3>SHOPPING ITEMS.</h3>
                <button class="btn btn-danger">+</button>
            </div>
            <div class="row">
                <div class="col-auto">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox">
                        <label class="form-check-label" for="inlineCheckbox1">FOODS</label>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox">
                        <label class="form-check-label" for="inlineCheckbox2">NESSESARY</label>
                    </div>
                </div>
            </div>
            
            <!-- // 買い物一覧 -->
            <GoodsListItem></GoodsListItem>
            <GoodsListItem></GoodsListItem>
            <GoodsListItem></GoodsListItem>
            <GoodsListItem></GoodsListItem>
        </div>
    </div>


</template>

<script setup>
    import GoodsListItem from './GoodsListItem.vue';
</script>

<style>

</style>