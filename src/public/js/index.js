
$(
    function () {
        const socket = io();

        /* Elementos del chat */
        const $mensajeForm = $("#enviarmensaje");
        const $mensajeBox = $("#mensaje");
        const $chat = $("#chat");

        $chat.append("Mensajes privados: /p usuario mensaje<br/>");

        /* Elementos del nick */
        const $nickForm = $("#nickform");
        const $nickError = $("#nickerror");
        const $nickName = $("#nickname");
        const $userName = $("#username");

        /* Elementos del chat */

        $mensajeForm.submit(e => {
            e.preventDefault();
            socket.emit("send message", $mensajeBox.val(), function (data) {
                $chat.append("<b class='error'>" + data + "</b><br/>");
            });
            $mensajeBox.val("")
        })

        socket.on("new message", function (data) {
            const hora = new Date();
            $chat.append("<i class='fas fa-angle-right'></i><b>" + data.nick + "</b>: " + data.msg+ "  <small style='color:blue;'>" + hora.getHours() + ":" + hora.getMinutes()+"</small><br/>");
        });

        /* Elementos del chat */

        $nickForm.submit(e => {
            e.preventDefault();
            socket.emit("new user", $nickName.val(), function (data) {
                if (data) {
                    $("#contienenick").hide();
                    $("#contienechat").show();
                    $("#nicking").html("<i class='fas fa-user'></i> " + $nickName.val());
                } else {
                    $nickError.html(`
                    <div class="alert alert-danger">
                      Por Favor Ingrese Otro Usuario
                    </div>
                  `);
                }
                $nickName.val("");
            });
        });

        socket.on("usernames", data => {
            let html = "";
            for (let i = 0; i < data.length; i++) {
                html += "<p><i class='fas fa-user'></i> " + data[i] + "<p>";
            }
            $userName.html(html);
        })

        socket.on("privado", data => {
            $chat.append(`<b class="whisper"><i class='fas fa-angle-right'></i>${data.nick}: ${data.msg}</b><br/>`);
        })
    }
)