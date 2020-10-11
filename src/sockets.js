module.exports = function (io) {

    let nicknames = {};

    io.on("connection", socket => {
        console.log("Nuevo Usuario Conectado");

        socket.on("new user", function (data, cb) {
            if (data in nicknames) {
                cb(false);
            } else {
                if (data == "") {
                    cb(false);
                } else {
                    data = data.trim();
                    if (data.indexOf(" ") === -1) {
                        cb(true);
                        socket.nickname = data;
                        nicknames[socket.nickname] = socket;
                        updateNicknames();
                    }else{
                        cb(false);
                    }
                }
            }
        });

        socket.on("disconnect", data => {
            if (!socket.nickname) return;
            delete nicknames[socket.nickname];
            updateNicknames();
        })

        socket.on("send message", function (data, cb) {
            var msg = data.trim();

            if (msg.substr(0, 3) === "/p ") {
                msg = msg.substr(3);
                const index = msg.indexOf(" ");

                if (index !== -1) {
                    var name = msg.substring(0, index);
                    var msg = msg.substring(index + 1);

                    if (name in nicknames) {
                        nicknames[name].emit("privado", {
                            msg,
                            nick: socket.nickname,
                        })
                        nicknames[socket.nickname].emit("privado", {
                            msg,
                            nick: "to "+name,
                        })
                    } else {
                        cb("Error, Por Favor coloca un usuario valido");
                    }
                } else {
                    cb("Error, coloca /p usuario mensaje")
                }
            } else {
                io.sockets.emit("new message", {
                    msg: data,
                    nick: socket.nickname,
                });
            }
        });

        function updateNicknames() {
            io.sockets.emit("usernames", Object.keys(nicknames));
        }

    });
}