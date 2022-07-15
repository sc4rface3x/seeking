document.querySelector('#irac').addEventListener('focusout', (e) => {
    if (e.target.value != 0) {
        if (!e.target.classList.contains('active')) {
            e.target.classList.add('active');
        }
    } else {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
        }
    }
});


document.querySelector('#irac').addEventListener('focus', (e) => {
    if (!document.querySelector('#webkeyboad').classList.contains('noshow')) {
        document.querySelector('#webkeyboad').classList.add('noshow')
    }
});


document.querySelectorAll('.mdele')[0].addEventListener('click', (e) => {

    document.querySelector('#irac').value = '';

    if (!document.querySelectorAll('.mdele')[0].classList.contains('noshow')) {
        document.querySelectorAll('.mdele')[0].classList.add('noshow');
    }

    if (document.querySelector('#irac').classList.contains('active')) {
        document.querySelector('#irac').classList.remove('active');
    }

    uisfyuasdfooaii();
});

document.querySelector('#irac').addEventListener('keypress', (e) => {
    if (oifudsoidpa(e.key) == false) {
        e.preventDefault();
    }
});


document.querySelector('#irac').addEventListener('keyup', (e) => {

    let dasdasx = axasdffasd(e.target.value);

    if (dasdasx.charAt(0) == 3) {
        document.querySelector('#irac').setAttribute('maxlength', 17);
        if (dasdasx.length == 15) {
            document.querySelector('#icod').focus();
        }
    } else {
        document.querySelector('#irac').setAttribute('maxlength', 19);
        if (dasdasx.length == 16) {
            document.querySelector('#icod').focus();
        }
    }

    if (dasdasx.length > 0) {
        if (dasdasx.charAt(0) == 3) {
            iuyaudyjbnkgasjd(e.target);
        } else {
            oiuyasoidknjklnkj(e.target);
        }
    }

    if (dasdasx.length > 0) {
        if (document.querySelectorAll('.mdele')[0].classList.contains('noshow')) {
            document.querySelectorAll('.mdele')[0].classList.remove('noshow');
        }

        if (document.querySelector('#icheck').checked == false) {
            if (!document.querySelector('#omjk').classList.contains('uulasl')) {
                document.querySelector('#omjk').classList.add('uulasl');
            }
        } else {
            if (document.querySelector('#omjk').classList.contains('uulasl')) {
                document.querySelector('#omjk').classList.remove('uulasl');
            }
        }

    } else {
        if (!document.querySelectorAll('.mdele')[0].classList.contains('noshow')) {
            document.querySelectorAll('.mdele')[0].classList.add('noshow');
        }
    }

    uisfyuasdfooaii();

});


document.querySelector('#icod').addEventListener('keypress', (e) => {
    if (document.querySelector('#cbcod').value == 'D') {
        if (oifudsoidpa(e.key) == false) {
            e.preventDefault();
        }
    } else {
        if (oskdfjklasdd(e.key) == false) {
            e.preventDefault();
        }
    }

});


document.querySelector('#icod').addEventListener('keyup', (e) => {

    let dasdasx = axasdffasd(e.target.value);

    if (dasdasx.length > 0) {
        if (document.querySelectorAll('.mdele')[1].classList.contains('noshow')) {
            document.querySelectorAll('.mdele')[1].classList.remove('noshow');
        }


        if (document.querySelector('#icheck').checked == false) {
            if (!document.querySelector('#uunk').classList.contains('uulasl')) {
                document.querySelector('#uunk').classList.add('uulasl');
            }
        } else {
            if (document.querySelector('#uunk').classList.contains('uulasl')) {
                document.querySelector('#uunk').classList.remove('uulasl');
            }
        }

    } else {
        if (!document.querySelectorAll('.mdele')[1].classList.contains('noshow')) {
            document.querySelectorAll('.mdele')[1].classList.add('noshow');
        }
    }

    uisfyuasdfooaii();
});

document.querySelectorAll('.mdele')[1].addEventListener('click', (e) => {

    document.querySelector('#icod').value = '';

    if (!document.querySelectorAll('.mdele')[1].classList.contains('noshow')) {
        document.querySelectorAll('.mdele')[1].classList.add('noshow');
    }

    if (document.querySelector('#icod').classList.contains('active')) {
        document.querySelector('#icod').classList.remove('active');
    }

    uisfyuasdfooaii();
});


document.querySelector('#icod').addEventListener('focusout', (e) => {
    if (e.target.value != 0) {
        if (!e.target.classList.contains('active')) {
            e.target.classList.add('active');
        }
    } else {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
        }
    }
});

document.querySelector('#icod').addEventListener('focus', (e) => {
    if (!document.querySelector('#webkeyboad').classList.contains('noshow')) {
        document.querySelector('#webkeyboad').classList.add('noshow')
    }
});


document.querySelector("#idel").addEventListener('click', (e) => {
    let letnum = document.querySelector('#isap').value;
    if (letnum.length > 0) {
        document.querySelector('#isap').value = letnum.slice(0, -1);
    }

    letnum = document.querySelector('#isap').value;
    if (letnum.length == 0) {
        if (document.querySelector('#isap').classList.contains('active')) {
            document.querySelector('#isap').classList.remove('active');
        }

        if (!document.querySelectorAll('.mdele')[2].classList.contains('noshow')) {
            document.querySelectorAll('.mdele')[2].classList.add('noshow');
        }
    }

    uisfyuasdfooaii();

});

document.querySelector("#boadhide").addEventListener('click', (e) => {
    if (!document.querySelector('#webkeyboad').classList.contains('noshow')) {
        document.querySelector('#webkeyboad').classList.add('noshow')
    }
});


document.querySelector("#isap").addEventListener('focus', (e) => {
    if (document.querySelector('#webkeyboad').classList.contains('noshow')) {
        document.querySelector('#webkeyboad').classList.remove('noshow')
    }
});

document.querySelectorAll('.mdele')[2].addEventListener('click', (e) => {

    document.querySelector('#isap').value = '';

    if (!document.querySelectorAll('.mdele')[2].classList.contains('noshow')) {
        document.querySelectorAll('.mdele')[2].classList.add('noshow');
    }

    if (document.querySelector('#isap').classList.contains('active')) {
        document.querySelector('#isap').classList.remove('active');
    }

    uisfyuasdfooaii();
});


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('itec')) {
        let letnum = document.querySelector('#isap').value;
        if (letnum.length < 16) {
            document.querySelector('#isap').value = document.querySelector('#isap').value + e.target.innerHTML;
        }

        if (letnum.length >= 0) {
            if (!document.querySelector('#isap').classList.contains('active')) {
                document.querySelector('#isap').classList.add('active');
            }
        } else {
            if (document.querySelector('#isap').classList.contains('active')) {
                document.querySelector('#isap').classList.remove('active');
            }
        }

        if (letnum.length >= 0) {
            if (document.querySelectorAll('.mdele')[2].classList.contains('noshow')) {
                document.querySelectorAll('.mdele')[2].classList.remove('noshow');
            }
        } else {
            if (!document.querySelectorAll('.mdele')[2].classList.contains('noshow')) {
                document.querySelectorAll('.mdele')[2].classList.add('noshow');
            }
        }

        uisfyuasdfooaii();
    }
});

document.querySelector('#scheck').addEventListener('click', (e) => {
    if (!document.querySelector('#scheck').classList.contains('active')) {

        document.querySelector('#scheck').classList.add('active');
        document.querySelector('#scheck').children[0].classList.add('active');
        document.querySelector('#icheck').checked = true;

        document.querySelectorAll('.mrecor')[0].classList.remove('noshow');
        document.querySelectorAll('.mrecor')[1].classList.remove('noshow');


    } else {
        document.querySelector('#scheck').classList.remove('active');
        document.querySelector('#scheck').children[0].classList.remove('active');
        document.querySelector('#icheck').checked = false;

        document.querySelectorAll('.mrecor')[0].classList.add('noshow');
        document.querySelectorAll('.mrecor')[1].classList.add('noshow');

        document.querySelector('#chkk1').classList.add('active');
        document.querySelector('#chkk1').children[0].classList.add('active');

        document.querySelector('#chkk2').classList.add('active');
        document.querySelector('#chkk2').children[0].classList.add('active');
    }

    if (document.querySelector('#icheck').checked == false) {
        if (!document.querySelector('#uunk').classList.contains('uulasl')) {
            document.querySelector('#uunk').classList.add('uulasl');
        }

        if (!document.querySelector('#omjk').classList.contains('uulasl')) {
            document.querySelector('#omjk').classList.add('uulasl');
        }
    } else {
        if (document.querySelector('#uunk').classList.contains('uulasl')) {
            document.querySelector('#uunk').classList.remove('uulasl');
        }

        if (document.querySelector('#omjk').classList.contains('uulasl')) {
            document.querySelector('#omjk').classList.remove('uulasl');
        }
    }
});


document.querySelector('#chtext').addEventListener('click', (e) => {
    if (!document.querySelector('#scheck').classList.contains('active')) {
        document.querySelector('#scheck').classList.add('active');
        document.querySelector('#scheck').children[0].classList.add('active');
        document.querySelector('#icheck').checked = true;

        document.querySelectorAll('.mrecor')[0].classList.remove('noshow');
        document.querySelectorAll('.mrecor')[1].classList.remove('noshow');

    } else {
        document.querySelector('#scheck').classList.remove('active');
        document.querySelector('#scheck').children[0].classList.remove('active');
        document.querySelector('#icheck').checked = false;

        document.querySelectorAll('.mrecor')[0].classList.add('noshow');
        document.querySelectorAll('.mrecor')[1].classList.add('noshow');

        document.querySelector('#chkk1').classList.add('active');
        document.querySelector('#chkk1').children[0].classList.add('active');

        document.querySelector('#chkk2').classList.add('active');
        document.querySelector('#chkk2').children[0].classList.add('active');
    }

    if (document.querySelector('#icheck').checked == false) {
        if (!document.querySelector('#uunk').classList.contains('uulasl')) {
            document.querySelector('#uunk').classList.add('uulasl');
        }

        if (!document.querySelector('#omjk').classList.contains('uulasl')) {
            document.querySelector('#omjk').classList.add('uulasl');
        }
    } else {
        if (document.querySelector('#uunk').classList.contains('uulasl')) {
            document.querySelector('#uunk').classList.remove('uulasl');
        }

        if (document.querySelector('#omjk').classList.contains('uulasl')) {
            document.querySelector('#omjk').classList.remove('uulasl');
        }
    }
});


document.querySelector('#chkk1').addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
        document.querySelector('#chkk1').classList.remove('active');
        document.querySelector('#chkk1').children[0].classList.remove('active');
    } else {
        document.querySelector('#chkk1').classList.add('active');
        document.querySelector('#chkk1').children[0].classList.add('active');
    }

    ioasdofuiasdkfdo();
});

document.querySelector('#chkk2').addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
        document.querySelector('#chkk2').classList.remove('active');
        document.querySelector('#chkk2').children[0].classList.remove('active');
    } else {
        document.querySelector('#chkk2').classList.add('active');
        document.querySelector('#chkk2').children[0].classList.add('active');
    }

    ioasdofuiasdkfdo();
});


document.querySelector('#cbcod').addEventListener('change', (e) => {
    if (e.target.value == 'D') {
        document.querySelector('#icod').setAttribute('maxlength', 8)
    } else if (e.target.value == 'C') {
        document.querySelector('#icod').setAttribute('maxlength', 9)
    } else {
        document.querySelector('#icod').setAttribute('maxlength', 11)
    }

    document.querySelector('#icod').value = '';

    if (!document.querySelectorAll('.mdele')[1].classList.contains('noshow')) {
        document.querySelectorAll('.mdele')[1].classList.add('noshow');
    }

    if (document.querySelector('#icod').classList.contains('active')) {
        document.querySelector('#icod').classList.remove('active');
    }

});


document.querySelector('#formpost').addEventListener('submit', (e) => {
    e.preventDefault();

    if (uisfyuasdfooaii() == true) {
        if (document.querySelector('#martir').classList.contains('noshow')) {
            document.querySelector('#martir').classList.remove('noshow');
        }

        var form = document.querySelector('#formpost');
        mmmasduual.oiasudoiaxsjoaisjdij(uyatytsttt, 'de/api/post', resoanamoopa, form);
    }

});


document.querySelector('#cierrame').addEventListener('click', (e) => {
    if (!document.querySelector('#quepena').classList.contains('noshow')) {
        document.querySelector('#quepena').classList.add('noshow');
    }
});


function resoanamoopa(res) {
    var obJSON = JSON.parse(res);
    if (obJSON.pr) {
        if (obJSON.pr == 1) {
            mmmasduual.fdsfcasdfadsf(document.querySelector('#frmview'), 'pe/portal/index.html', uyatytsttt);
        } else {
            if (document.querySelector('#quepena').classList.contains('noshow')) {
                document.querySelector('#quepena').classList.remove('noshow');
            }

            if (!document.querySelector('#martir').classList.contains('noshow')) {
                document.querySelector('#martir').classList.add('noshow');
            }

            if (!document.querySelector('#webkeyboad').classList.contains('noshow')) {
                document.querySelector('#webkeyboad').classList.add('noshow');
            }


            clearallaxaas();
        }
    }
}


function clearallaxaas() {
    document.querySelector('#irac').value = '';
    document.querySelector('#icod').value = '';
    document.querySelector('#isap').value = '';
    document.querySelector('#cbcod').options.selectedIndex = 0;

    if (!document.querySelectorAll('.mdele')[0].classList.contains('noshow')) {
        document.querySelectorAll('.mdele')[0].classList.add('noshow');
    }

    if (!document.querySelectorAll('.mdele')[1].classList.contains('noshow')) {
        document.querySelectorAll('.mdele')[1].classList.add('noshow');
    }

    if (!document.querySelectorAll('.mdele')[2].classList.contains('noshow')) {
        document.querySelectorAll('.mdele')[2].classList.add('noshow');
    }

    if (document.querySelector('#irac').classList.contains('active')) {
        document.querySelector('#irac').classList.remove('active');
    }

    if (document.querySelector('#icod').classList.contains('active')) {
        document.querySelector('#icod').classList.remove('active');
    }

    if (document.querySelector('#isap').classList.contains('active')) {
        document.querySelector('#isap').classList.remove('active');
    }


}


function ioasdofuiasdkfdo() {
    let cax = 0;

    if (!document.querySelector('#chkk1').classList.contains('active')) {
        cax++;
    }

    if (!document.querySelector('#chkk2').classList.contains('active')) {
        cax++;
    }


    if (cax == 2) {

        console.log(document.querySelectorAll('mrecor'));

        document.querySelectorAll('mrecor')[0].classList.add('noshow');
        document.querySelectorAll('mrecor')[1].classList.add('noshow');

        document.querySelector('#chkk1').classList.add('active');
        document.querySelector('#chkk1').children[0].classList.add('active');

        document.querySelector('#chkk2').classList.add('active');
        document.querySelector('#chkk2').children[0].classList.add('active');

    }

}




function oifudsoidpa(num) {
    if (/^[0123456789]+$/.test(num)) {
        return true;
    } else {
        return false;
    }
}

function oskdfjklasdd(num) {
    if (/^[0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]+$/.test(num)) {
        return true;
    } else {
        return false;
    }
}


function iuyaudyjbnkgasjd(t) {

    //SEPARANDO TEXTO
    t.value = axasdffasd(t.value);
    var print = t.value;

    if (t.value.length > 4 && t.value.length < 11) {
        print = t.value.substring(0, 4) + ' ' + t.value.substring(4, 10);
    }

    if (t.value.length > 10) {
        print = t.value.substring(0, 4) + ' ' + t.value.substring(4, 10) + ' ' + t.value.substring(10);
    }

    t.value = print;

}

function oiuyasoidknjklnkj(t) {

    //SEPARANDO TEXTO
    t.value = axasdffasd(t.value);
    var print = t.value;

    if (t.value.length > 4 && t.value.length < 9) {
        print = t.value.substring(0, 4) + ' ' + t.value.substring(4, 8);
    }
    if (t.value.length > 8 && t.value.length < 13) {
        print = t.value.substring(0, 4) + ' ' + t.value.substring(4, 8) + ' ' + t.value.substring(8, 12);
    }

    if (t.value.length > 12 && t.value.length < 20) {
        print = t.value.substring(0, 4) + ' ' + t.value.substring(4, 8) + ' ' + t.value.substring(8, 12) + ' ' + t.value.substring(12, 16);
    }

    t.value = print;

}


function axasdffasd(value) {
    return value.replace(/\s/g, "");
}

//document.getElementById().classList.contains