
// BÀI 1




document.getElementById('btnalert').onclick = function() {
    var n = Math.sqrt(20000);
    n = parseInt(n);
    while(n * (n + 1) / 2 > 10000){
        n--;
    }
    n++;
    console.log(n);
    document.getElementById('txtalert').innerHTML = "Số n nhỏ nhất sao cho tổng từ 1 đến n lớn hơn 10000: " + n;
}

// BÀI 2

document.getElementById('btncalc').onclick = function() {
    var x = document.getElementById('txtX').value * 1;
    var n = document.getElementById('txtN').value * 1;
    var ans = x;
    for(var i = 2; i <= n; i++){
        ans += Math.pow(x,i);
    }

    document.getElementById('KetQua').innerHTML = ans;
}

// BÀI 3

document.getElementById('btngiaithua').onclick = function() {

    var n = document.getElementById('txtgiaithua').value * 1;

    var ans = 1;
    for(var i = 1; i <= n; i++){
        ans *= i;
    }

    document.getElementById('factorial').innerHTML = ans;
}

// BÀI 4

document.getElementById('btndiv').onclick = function() {
    toggleDivs();
}

function toggleDivs() {
    var container = document.getElementById('container');
    container.innerHTML = '';

    for (var i = 1; i <= 10; i++) {
      var div = document.createElement('div');
      div.textContent = i;

      if (i % 2 === 0) {
        // div.classList.remove('btn-info');
        div.classList.add('btn-danger');
        div.classList.add('mt-3');
      } else {
        // div.classList.remove('btn-danger');
        div.classList.add('btn-info');
        div.classList.add('mt-3');
      }

      container.appendChild(div);
    }
}

// BÀI 5

document.getElementById('btnNguyenTo').onclick = function() {
    var n = document.getElementById('txtNguyenTo').value * 1;
    var ans = [];
    for(var i = 2; i <= n; i++){
        var count = 0;
        for(var j = 2; j * j <= i; j++){
            if(i % j === 0){
                count++;
            }
        }
        if(count == 0){
            ans.push(i);
        }
    }
    document.getElementById('soNguyenTo').innerHTML = "Các số nguyên tố từ 1 đến n: " + ans;
}
