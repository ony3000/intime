import Vue from 'vue';
import 'font-awesome/scss/font-awesome.scss';
import HelpPage from './components/HelpPage';
import './assets/global-tuning.scss';

const viewModel = new Vue({
	el: '#intime-app',
	components: { HelpPage },
	template: '<HelpPage/>',
});
