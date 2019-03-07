const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/Input/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    //  BBD 行为驱动开发测试
    it('存在.', () => {
        expect(Input).to.be.ok
    });
    describe('props', () => {
        it('可以设置value.', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    value: 'value存在'
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.value).to.equal('value存在');
            vm.$destroy()
        });
        it('可以设置disabled.', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(true);
            vm.$destroy()
        });
        it('可以设置readonly', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.equal(true);
            vm.$destroy()
        });
        it('可以设置error', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    error: '错误提示'
                }
            }).$mount();
            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error');
            const errorMessage = vm.$el.querySelector('.error-message');
            expect(errorMessage.innerText).to.equal('错误提示');
            vm.$destroy()
        });
    })

    describe('事件', () => {
        it('支持change事件', () => {

        })
    });

});