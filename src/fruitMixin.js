export const fruitMixin = {
    data () {
        return {
          fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
          filtertext: '',
          lText: 'rcolor',
          aText: 'bcolor uline'
        }
      },
      computed: {
        filteredFruits(){
          return this.fruits.filter((element) => {
            return element.match(this.filtertext)
          })
        }
      },
      created(){
          console.log('created')
      }
}