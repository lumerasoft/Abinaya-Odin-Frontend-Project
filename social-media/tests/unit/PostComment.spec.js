import { mount } from '@vue/test-utils';
import  Comment  from '@/components/PostComment.vue';



describe("Comment.vue",()=>{

    it ("first case",()=>{     
        const setLocalStorage=(id,data)=>{
            window.localStorage.setItem(id,JSON.stringify(data));
        }    
        const id="1";
        const comment={data: "Sample data"};
        setLocalStorage(id,comment);
        expect(localStorage.getItem(id)).toEqual(JSON.stringify(comment));
    });

   
    // it('list of comments',()=>{
    //     const id="1";
    //     const comment={data: "hello world"};
    //     const wrapper=mount(Comment,{
    //         window.localStorage.getItem(id)
    //     })
    //     expect(wrapper.localStorage.getItem(id)).toEqual(JSON.stringify(comment))
    // })

    // it('renders the list of review',()=>{
    //     const count=2
    //     const wrapper= mount(Comment,{
    //         computed: {count}
    //     })
    //     expect(wrapper.text()).toMatch(count)
    // })

    // test('triggers a click', async () => {
    //     const wrapper = mount(Comment)  
    //     await wrapper.trigger('click')
    //   })
})