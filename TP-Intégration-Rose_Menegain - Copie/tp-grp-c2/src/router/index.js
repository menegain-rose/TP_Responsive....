import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import BuyView from '../views/BuyView.vue'
import ManagePropertyView from '../views/ManagePropertyView.vue'
import RentView from '../views/RentView.vue'
import RessourcesView from '../views/RessourcesView.vue'
import SellView from '../views/SellView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/', name: 'Buy', component: BuyView },
    { path: '/', name: 'Manage Property', component: ManagePropertyView },
    { path: '/', name: 'Rent', component: RentView },
    { path: '/', name: 'Ressources', component: RessourcesView },
    { path: '/', name: 'Sell', component: SellView },
    // ici les autre routes
  ]
})

export default router
