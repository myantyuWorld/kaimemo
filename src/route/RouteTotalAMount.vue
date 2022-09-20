<template>
	<div class="wrapper">
		<div class="">
			<h1 class="title">KAIMEMO!</h1>
			<a @click="moveGoodsList">買い物一覧へ</a>
			<!-- /Form -->
			<div class="card shadow">
				<div class="card-body">
					<div class="row">
						<div class="col">Regist</div>
						<div class="col"></div>
						<div class="col-2"></div>
					</div>
					<div class="row mt-2">
							<div class="col-auto">
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" value="0" checked>
									<label class="form-check-label" for="inlineCheckbox1">🍔</label>
								</div>
							</div>
							<div class="col-auto">
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" value="1">
									<label class="form-check-label" for="inlineCheckbox2">🧴</label>
								</div>
							</div>
					</div>
					<div class="row mt-2">
						<div class="col">
							<input type="date" class="form-control"/>
						</div>
						<div class="col-2">
						</div>
					</div>
					<div class="row mt-2">
						<div class="col">
							<input type="number" class="form-control" placeholder="１週間分購入した金額を入力"/>
						</div>
						<div class="col-2">
						</div>
					</div>
					<div class="row mt-2">
						<div class="col">
							<input type="text" class="form-control" placeholder="備考"/>
						</div>
						<div class="col-2">
							<BaseButton color="btn-primary rounded-circle btn--item--add">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
									class="bi bi-plus-circle" viewBox="0 0 16 16">
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
									<path
										d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
								</svg>
							</BaseButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import BaseButton from '../components/btn/BaseButton.vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const moveGoodsList = () => {
	router.push({ name: `RouteGoodsList`, query: {user_id: route.query.user_id} })
}
</script>

