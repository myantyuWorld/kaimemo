<template>
    <div class="d-flew align-items-center justify-content-center">
        <div class="card">
            <div class="jumbotron">
                <h1>KAIMEMO!</h1>
                <p>こんにちは、myatyuWorldです
                ”調整さん”みたいなイメージで、下記に示されているURLを友達と共有し、買い物ページを共有しましょう！
            </p>
                <hr class="my-4">
                <div class="row">
                    <div class="col">
                        <label for="">あなたの買い物登録ページ用のユーザーID</label>
                    </div>

                </div>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="" disabled v-model="txtSeed"/>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-primary" @click="moveGoodsList">買い物ページへ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">
        <div class="_container">
            <div class="row">
                <div class="col text-muted">
                    <a href="https://github.com/myantyuWorld/kaimemo-frontend">Copyright © 2022 myantyuWorld.</a> 
                </div>
                <div class="col-2">
                    <div class="d-flex justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import {ref, computed} from 'vue'
    import { useRouter } from 'vue-router'
    import * as md5 from 'md5';



    let txtSeed = ref('')
    txtSeed.value = md5(new Date().getTime())

    const router = useRouter()
    const moveGoodsList = () => {
      router.push({ name: `RouteGoodsList`, query: {user_id: txtSeed.value} })
    }

</script>

<style>
/* Sticky footer styles
-------------------------------------------------- */
html {
    position: relative;
    min-height: 100%;
}
body {
    /* Margin bottom by footer height */
    margin-bottom: 60px;
    background-color: rgb(247, 235, 205);
}

a {
    color: #777;
}

.jumbotron {
    background-color: rgb(243, 236, 219);
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  /* background-color: #f5f5f5; */
}
 
 
/* Custom page CSS
-------------------------------------------------- */
/* Not required for template or sticky footer method. */
 
._container {
  width: auto;
  max-width: 680px;
  padding: 0 15px;
}
._container .text-muted{
  margin: 10px 0;
}

</style>