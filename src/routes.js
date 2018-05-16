import Welcome from './components/welcome.vue'
import signIn from './components/signIn.vue'
import signUp from './components/signUp.vue'
import user from './components/userProfile.vue'
import viewHobbies from './components/viewHobbies.vue'
import editHobbies from './components/editHobbies.vue'
import createHobby from './components/createHobby.vue'

export const routes = [
    {path: '', component: Welcome},
    {path: '/signIn', component: signIn},
    {path: '/signUp', component: signUp},
    {path: '/userProfile', component: user, children:[
        {path: '', component: viewHobbies},
        {path: 'editHobbies', component: editHobbies},
        {path: 'createHobby', component: createHobby}
    ]},
    {path: '*', redirect: '/'},
]