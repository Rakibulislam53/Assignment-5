// scroll function
document.addEventListener("DOMContentLoaded", function() {
  const buyTicket = document.getElementById("buy-ticket");
  const mainSection = document.getElementById("main-section");

 buyTicket.addEventListener("click", function() {
    mainSection.scrollIntoView({behavior:"smooth"})
  });
});

// click event start..........
const allBtn = document.getElementsByClassName('btn-ticket');
for(const btn of allBtn){
      btn.addEventListener('click',function(e){
        disabledBtn();
        btn.classList.add('bg-green-400');
        btn.disabled = true;
        increse('seatCount');
        decrese('left-seat');
        
       
       
        const append = document.getElementById('append');
       
        const li = document.createElement('li');
       
        const p = document.createElement('p');
        p.classList.add('peru')
        p.innerText = e.target.innerText;
    
        const p2 = document.createElement('p');
        p2.innerText = 'economy';
    
        const p3 = document.createElement('p');
        p3.innerText = parseInt('550');
        
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        append.appendChild(li);
    
        
        const totalPrice = document.getElementById('total-price');
        const seatCount = document.getElementById('seatCount').innerText;
        const seatCountText = parseInt(seatCount)
        const price = 550;
        const updatePrice = seatCountText * price;
        totalPrice.innerText = updatePrice;
    

       
    
        const grandTotal = document.getElementById('grand-total');
        const grandTotalInner = grandTotal.innerText;
        const granTotalText = parseInt(grandTotalInner);
        grandTotal.innerText = updatePrice;
    
        

    
    
        if(seatCountText == 1){
          const submit = document.getElementById('submit');
          submit.disabled = false;
        }
    
      })
    }
   
  

const submit = document.getElementById('submit');
submit.addEventListener('click',function () {
  hiddenElemetById('header-section');
  hiddenElemetById('main-section');
  hiddenElemetById('footer');
  removeElemetById('success')
})

const btnContinue = document.getElementById('btn-continue');
btnContinue.addEventListener('click',function () {
  hiddenElemetById('success');
  removeElemetById('main-section')
  removeElemetById('header-section')
  removeElemetById('footer')
  const allBtn = document.getElementsByClassName('btn-ticket');
  for(const btn of allBtn){
    btn.classList.remove('bg-green-400');
  }
 setValueById('grand-total',0);
 setValueById('total-price',0);
 setValueById('left-seat',40);
 setValueById('seatCount',0);
 const discoutInput = document.getElementById('discout-input');
   discoutInput.classList.remove('hidden');
   const couponInput = document.getElementById('coupon');
    couponInput.value = '';

    const append = document.getElementById('append');
    append.classList.add('hidden');
    location.reload()

    

})

const btnDiscount = document.getElementById('btn-dicount');
btnDiscount.addEventListener('click',function () {
  const couponInput = document.getElementById('coupon');
 const couponValue = couponInput.value;
 const couponUpperCase = couponValue.toUpperCase();
 
 
 if(couponUpperCase === 'NEW15'){
  const totalPrice = document.getElementById('total-price').innerText;
  const totalPriceNumber = parseInt(totalPrice);
  const dicount = totalPriceNumber *15/100;
  
  const grandTotal = document.getElementById('grand-total');
  const grandTotalText = grandTotal.innerText;
  const grandTotalNumber = parseInt(grandTotalText);
  const discontedPrice = grandTotalNumber - dicount;
  grandTotal.innerText = discontedPrice;

   const discoutInput = document.getElementById('discout-input');
   discoutInput.classList.add('hidden');
  }else if(couponUpperCase === 'COUPLE 20'){
    const totalPrice = document.getElementById('total-price').innerText;
  const totalPriceNumber = parseInt(totalPrice);
  const dicount = totalPriceNumber *20/100;
  
  const grandTotal = document.getElementById('grand-total');
  const grandTotalText = grandTotal.innerText;
  const grandTotalNumber = parseInt(grandTotalText);
  const discontedPrice = grandTotalNumber - dicount;
  grandTotal.innerText = discontedPrice;

   const discoutInput = document.getElementById('discout-input');
   discoutInput.classList.add('hidden');

  }
  
  
  else{
    alert('This Coupon is not Valid')
    const couponInput = document.getElementById('coupon');
    couponInput.value = '';

 }
 
})

