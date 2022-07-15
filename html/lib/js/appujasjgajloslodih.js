class Appujasjgajloslodih {


    oiasudoiaxsjoaisjdij(sesion, rout, callback, form) {

        // Creamos un nuevo objeto encargado de la comunicación
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText != "" || this.responseText != "null") {
                    callback(this.responseText);
                }
            }
        }

        //POST
        var data = this.fasdfsdfsdafdf(form);

        // Definimos como queremos realizar la comunicación
        xhttp.open("POST", '/' + sesion + '/' + rout, true);
        // ENCRIPTAMOS LAS VARIABLES A ENVIAR
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // Enviamos la solicitud junto con los parámetros
        xhttp.send(data);

    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    fdsfcasdfadsf(form, act, id) {
        form.action = '/' + id + '/' + act;
        form.submit();
    }


    fasdfsdfsdafdf(form) {
        if (!form || form.nodeName !== "FORM") {
            return
        }
        var i, j, q = [];
        for (i = form.elements.length - 1; i >= 0; i = i - 1) {
            if (form.elements[i].name === "") {
                continue
            }
            switch (form.elements[i].nodeName) {
                case "INPUT":
                    switch (form.elements[i].type) {
                        case "text":
                        case "hidden":
                        case "tel":
                        case "password":
                        case "button":
                        case "reset":
                        case "submit":
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            break;
                        case "checkbox":
                        case "radio":
                            if (form.elements[i].checked) {
                                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value))
                            }
                            break;
                        case "file":
                            break
                    }
                    break;
                case "TEXTAREA":
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    break;
                case "SELECT":
                    switch (form.elements[i].type) {
                        case "select-one":
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            break;
                        case "select-multiple":
                            for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                                if (form.elements[i].options[j].selected) {
                                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value))
                                }
                            }
                            break
                    }
                    break;
                case "BUTTON":
                    switch (form.elements[i].type) {
                        case "reset":
                        case "submit":
                        case "button":
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            break
                    }
                    break
            }
        }
        return q.join("&")
    };

}