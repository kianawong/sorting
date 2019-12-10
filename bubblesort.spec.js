describe('Bubble Sort', function(){
  let arr = [0, 6, 7, 3 , 1]
  let newArr = [0,0,0,3,5,18,-1]
  let sorting;

  beforeEach(function(){
    sorting = {
      bubblin: function(val){
        return val
      }
    }
  })

  spyOn(sorting, 'bubblin')

  sorting.bubbleSort(arr)

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });


  it('our spyon works', function(){
    expect(sorting.bubblin).toHaveBeenCalled();})


  it('returns ordered', function(){
    expect(bubbleSort(arr)).toEqual([0,1,3,6,7]);
    expect(bubbleSort(newArr)).toEqual([-1,0,0,0,3,5,18]);
});
})
