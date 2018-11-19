// 1. Cookies permitem armazenar dados de forma persistente.
// 2. Possuem certas restrições de segurança e de armazenamento.
// 3. Tamanho limitado a 4kb.
// 4. Máximo de 20 cookies por domínio.
// 5. path=/ barra é o domínio atual do arquivo carregado.
// 6. path=/ cookie acessível e válido para todo o site.
// 7. path=/pessoas cookie acessível e válido para o subdomínio pessoas.
// 8. expires=data em formato GMT (formato internacional)
// 9. new Date().toGMTString()
// 10. this.document.cookie = "nome=valor; expires=data; path=/";

function writeCookie(name, value, days) {
    // Por default, não existe expiração, ou seja o cookie é temporário.
    var expires = "";
    // Especifica o número de dias para guardar o cookie
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }

    if (value != "" && value != null && value != "null") {
        // Define o cookie com o nome, valor e data de expiração
        document.cookie = name + "=" + value + expires + "; path=/";
    }
}

function readCookie(name) {
    // Encontra o cookie especificado e retorna o seu valor.
    var searchName = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(searchName) == 0)
            return c.substring(searchName.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    // Exclui o cookie
    writeCookie(name, "", -1);
}