"use strict";
exports.__esModule = true;
var Tools = /** @class */ (function () {
    function Tools(fs, path) {
        var _this = this;
        if (fs) {
            /**
             * [fn.tools.writeFile] 写文件
             * @param dir
             * @param dist
             */
            this.writeFile = function (file, text, onEnd) {
                fs.open(file, 'w', function (err, fd) {
                    if (err) {
                        throw err;
                    }
                    else {
                        var buffer = new Buffer(text);
                        fs.write(fd, buffer, 0, buffer.length, 0, function (err, bytesWritten, buffer) {
                            if (err) {
                                throw err;
                            }
                            else {
                                fs.close(fd);
                                if (typeof onEnd === 'function') {
                                    onEnd();
                                }
                            }
                        });
                    }
                });
            };
            /**
             * [fn.tools.copyFile] 复制文件
             * @param dir
             * @param dist
             */
            this.copyFile = function (filePath, distPath) {
                fs.createReadStream(filePath).pipe(fs.createWriteStream(distPath));
            };
        }
        if (fs && path) {
            /**
             * [fn.tools.deleteDirectory] 删除文件夹和文件
             * @param dir
             * @param dist
             */
            this.deleteDirectory = function (dir) {
                if (fs.existsSync(dir)) {
                    var files = fs.readdirSync(dir);
                    files.forEach(function (file) {
                        var subFile = path.join(dir, file);
                        if (fs.statSync(subFile).isDirectory()) {
                            _this.deleteDirectory(subFile);
                        }
                        else {
                            fs.unlinkSync(subFile);
                        }
                    });
                    fs.rmdirSync(dir);
                }
            };
            /**
             * [fn.tools.copyDirectory] 复制文件夹和文件
             * @param dir
             * @param dist
             */
            this.copyDirectory = function (dir, dist) {
                if (fs.existsSync(dir)) {
                    var distDir_1 = path.join(dist, path.basename(dir));
                    fs.mkdirSync(distDir_1);
                    var files = fs.readdirSync(dir);
                    files.forEach(function (file) {
                        var subFile = path.join(dir, file);
                        var subDist = path.join(distDir_1, file);
                        if (fs.statSync(subFile).isDirectory()) {
                            _this.copyDirectory(subFile, subDist);
                        }
                        else {
                            _this.copyFile(subFile, subDist);
                        }
                    });
                }
            };
        }
    }
    return Tools;
}());
exports.Tools = Tools;