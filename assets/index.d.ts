/**==============================================================
 * funclib.js
 * Gitlab: http://gitlab.zte.com.cn/CN-Tower/funclib.js.git
 * Github: http://github.com/CN-Tower/funclib.js
 ----------------------------------------------------------------
 ## Version
 * fn.version                返回当前函数库版本
 ## Type
 * fn.typeOf                 检查值的类型，返回布尔值
 * fn.typeValue              检查值的类型，是则返回该值，否则返回false
 ## Array      
 * fn.array                  返回指定长度和默认值的数组
 * fn.toArray                值数组化
 * fn.find                   根据条件寻找值
 * fn.filter                 根据条件取过滤值
 * fn.reject                 根据条件过滤值
 * fn.contains               判断数组是否包含符合条件的值
 * fn.findIndex              寻找值在数组中的索引
 * fn.sortBy                 对象数组根据字段排序
 ## Object     
 * fn.len                    获取对象自有属性的个数
 * fn.forIn                  遍历对象的可数自有属性
 * fn.isEmpty                判断对象是否为空对象或数组
 * fn.overlay                给对象赋值，可指定字段
 * fn.deepCopy               深拷贝数组或对象
 * fn.get                    返回对象或子孙对象的属性，可判断类型
 ## Mathematic 
 * fn.random                 返回指定范围的随机数
 * fn.rdid                   返回指定长度(最小6位)的随机ID
 * fn.rdcolor                返回一个随机色值
 ## Time       
 * fn.interval               循环定时器
 * fn.timeout                延时定时器
 * fn.defer                  延迟执行函数
 * fn.time                   返回一个当前时间戳
 * fn.fmtDate                获取格式化的时间字符串
 ## String     
 * fn.encodeHtml             编码HTML字符串
 * fn.decodeHtml             解码HTML字符串
 * fn.fmtCurrency            格式化显示货币
 * fn.cutString              裁切字符串到指定长度
 ## RegExp     
 * fn.getPattern             获取一个通用的正则表达式
 * fn.matchPattern           与一个或几个通用正则匹配
 ## Function
 * fn.throttle               节流函数
 * fn.debounce               防抖函数
 ## Events     
 * fn.getKeyCodeByName       根据键名获取键码
 * fn.getKeyNameByCode       根据键码获取键名
 ## Url
 * fn.parseQueryString       解析Url参数成对象
 * fn.stringfyQueryString    把对象编译成Url参数
 ## Loger
 * fn.chalk                  返回带颜色的字符串
 * fn.log                    控制打印格式化值
 ## Element        
 * fn.fullScreen             全屏显示一个HTML元素
 * fn.exitFullScreen         退出全屏显示
 * fn.checkIsFullScreen      检测是否处理全屏状态
 * fn.fullScreenChange       检测是否全屏状态
 * fn.pollingEl              轮询获取异步出现的HTML元素
 * fn.noAutoComplete         防止input密码自动填充
 * fn.copyText               复制文本到粘贴板
 ## Cookie
 * fn.setCookie              设置Cookie
 * fn.getCookie              根据name读取cookie
 * fn.removeCookie           根据name删除cookie
 ## Tools      
 * fn.rd                     NodeJs读文件
 * fn.wt                     NodeJs写文件
 * fn.cp                     NodeJs复制文件夹和文件
 * fn.mv                     NodeJs移动文件夹和文件
 * fn.rm                     NodeJs删除文件夹和文件
 * fn.mk                     NodeJs创建文件夹
 ## Progress      
 * fn.progress.start         开启进度，并传入参数
 * fn.progress.stop          停止进度，结束后触发回调
 ## Tricks
 * fn.extendJquery           jQuery拓展
 * $ele.findCousin           jQuery获取元素表亲
 ================================================================*/
declare var fn: Funclib;
export = fn;
export as namespace fn;

interface Progress {
    /**
     * [fn.progress.start] 开启进度，并传入参数
     * @param options {title: string, width: number (base: 40)} | 'message'
     */
    start(options: any): void;
    /**
     * [fn.progress.stop] 结束进度，结束后触发回调
     * @param options 
     */
    stop(onStopped?: Function): void;
}

interface Funclib {
    /**
     * [fn.typeOf] 检查值的类型，返回布尔值
     * @param value 
     * @param type ['arr'|'obj'|'fun'|string|string[]]
     */
    typeOf(value: any, type: 'arr' | 'obj' | 'fun' | string | string[]): boolean;
    /**
     * [fn.typeValue] 检查值的类型，true则返回该值，否则返回false
     * @param value 
     * @param type ['arr'|'obj'|'fun'|string|string[]]
     */
    typeValue(value: any, type: 'arr' | 'obj' | 'fun' | string | string[]): any;
    /**
     * [fn.array] 返回一个指定长度和默认值的数组
     * @param length [number]
     * @param value  [any, function]
     */
    array(length: number, value?: any): any[];
    /**
     * [fn.toArray] 值数组化
     * @param src 
     */
    toArray(src: any): any[];
    /**
     * [fn.find] 根据条件寻找值
     * @param src 
     * @param predicate 
     */
    find(src: any[], predicate: any): any;

    /**
     * [fn.filter] 根据条件取过滤值
     * @param src 
     * @param predicate 
     */
    filter(src: any[], predicate: any): any[];

    /**
     * [fn.reject] 根据条件过滤值
     * @param src 
     * @param predicate 
     */
    reject(src: any[], predicate: any): any[];

    /**
     * [fn.contains] 判断数组是否包含符合条件的值
     * @param src 
     * @param predicate 
     */
    contains(src: any[], predicate: any): boolean;

    /**
    * [fn.findIndex] 寻找值在数组中的索引
    * @param src 
    * @param predicate 
    */
    findIndex(src: any[], predicate: any): number;
    /**
     * [fn.sortBy] 对象数组根据字段排序
     * @param tableData
     * @param field
     * @param isDesc
     */
    sortBy(tableData: any, field: string, isDesc?: boolean): any;
    /**
     * [fn.len] 获取对象自有属性的个数
     * @arg obj [object]
     */
    len(obj: any): number;
    /**
     * [fn.forIn] 遍历对象的可数自有属性
     * @arg obj
     * @arg callback
     */
    forIn(obj: Object, callback: any): void;
    /**
     * [fn.isEmpty] 判断对象是否为空对象或数组
     * @param obj 
     */
    isEmpty(obj: Object | Function | string | any[]): boolean;
    /**
     * [fn.overlay] 给对象赋值
     * @param target 
     * @param source 
     * @param propList 
     */
    overlay(target: Object, source: Object, propList?: string[]): void;
    /**
     * [fn.deepCopy] 深拷贝对象或数组
     * @param data
     */
    deepCopy(data: any): any;
    /**
     * [fn.get] 返回对象或子孙对象的属性，可判断类型
     * @param obj [Object]
     * @param chain [string]
     * @param type ['arr'|'obj'|'fun'|string|string[]]
     */
    get(obj: Object, chain: string, type?: 'arr' | 'obj' | 'fun' | string | string[]): any;
    /**
     * [fn.random] 返回一个指定范围的随机数
     * @param sta [number]
     * @param end [number]
     */
    random(sta: number, end?: number): number;
    /**
     * [fn.rdid] 返回一个指定长度(最小4位，默认12位)的随机ID。
     * @param len [number]
     */
    rdid(len?: number): string;
    /**
     * [fn.rdcolor] 返回一个随机色值
     */
    rdcolor(): string;
    /**
     * [fn.interval] 循环定时器
     * @param timerId
     * @param duration
     * @param callback
     */
    interval(timerId: any, duration: any, callback?: Function): void;
    /**
     * [fn.timeout] 延时定时器
     * @param timerId
     * @param duration
     * @param callback
     */
    timeout(timerId: any, duration?: any, callback?: Function): void;
    /**
     * [fn.defer] 延迟执行函数
     * @param func 
     */
    defer(func: Function): void;
    /**
     * [fn.time] 返回一个当前时间戳
     */
    time(time?: Date | string | number): number;
    /**
     * [fn.fmtDate] 获取格式化的时间字符串
     * @param fmtStr 
     * @param time 
     */
    fmtDate(fmtStr: string, time?: Date | string | number): string;
    /**
     * [fn.encodeHtml] 编码HTML字符串
     * @param html 
     */
    encodeHtml(html: string): string;
    /**
     * [fn.decodeHtml] 解码HTML字符串
     * @param html 
     */
    decodeHtml(html: string): string;
    /**
     * [fn.fmtCurrency] 格式化显示货币
     * @param number
     * @param digit
     * @returns {string}
     */
    fmtCurrency(number: number, digit?: number): any;
    /**
     * [fn.cutString] 裁切字符串到指定长度
     * @param str
     * @param len
     * @returns {string}
     */
    cutString(str: number, len: number): string;
    /**
     * [fn.getPattern] 获取一个通用的正则表达式
     * @param type
     * @param isNoLimit
     * @returns {pattern|undefined}
     */
    getPattern(type: string, isNoLimit?: boolean): any;
    /**
     * [fn.matchPattern] 与一个或几个通用正则匹配
     * @param src
     * @param type
     * @param isNoLimit
     * @returns {boolean}
     */
    matchPattern(src: string, type: string | string[], isNoLimit?: boolean): boolean;
    /**
     * [fn.throttle] 节流函数，适用于限制resize和scroll等函数的调用频率
     * @param  func
     * @param  wait
     * @param  options
     */
    throttle(func: Function, wait: number, options?: { leading?: boolean, trailing?: boolean }): Funclib;
    /**
     * [fn.debounce] 防抖函数, 适用于获取用户输入
     * @param func
     * @param wait
     * @param immediate
     */
    debounce(func: Function, wait: number, immediate?: boolean): Function;
    /**
     * [fn.getKeyCodeByName] 根据键名获取键码
     * @param keyName 
     */
    getKeyCodeByName(keyName: string): number;
    /**
     * [fn.getKeyNameByCode] 根据键码获取键名
     * @param keyName 
     */
    getKeyNameByCode(keyCode: number): string;
    /**
     * [fn.parseQueryString] 解析Url参数成对象
     * @param url [string]  default: window.location.href
     */
    parseQueryString(url?: string): Object;
    /**
     * [fn.stringfyQueryString] 把对象编译成Url参数
     * @param obj [string]  default: window.location.href
     */
    stringfyQueryString(obj: Object): string;
    /**
     * [fn.fullScreen] 全屏显示HTML元素
     * @param el
     * @returns {any}
     */
    fullScreen(el: any): void;
    /**
     * [fn.exitFullScreen] 退出全屏显示
     * @returns {any}
     */
    exitFullScreen(): void;
    /**
     * [fn.isFullScreen] 检测是否全屏状态
     * @returns {boolean}
     */
    isFullScreen(): boolean;
    /**
     * [fn.fullScreenChange] 检测是否全屏状态
     * @param callback
     */
    fullScreenChange(callback?: boolean | any): void;
    /**
     * [fn.pollingEl] 轮询获取异步出现的HTML元素
     * @param selector 选择器
     * @param timeout 超时时间
     * @param options {duration: number = 250; isSelectAll: boolean = false}
     * @param callback
     */
    pollingEl(selector: string | string[], timeout: number | boolean, options?: Object, callback?: Function): void;
    /**
     * [fn.noAutoComplete] 防止input密码自动填充
     * @param input [HTMLInputElement]
     * @param type ['username'|'password']
     */
    noAutoComplete(input: any, type: 'username' | 'password'): void;
    /**
     * [fn.copyText] 复制文本到粘贴板
     * @param text [string]
     */
    copyText(text: string): void;
    /**
     * [fn.setCookie] 设置Cookie
     * @param name 
     * @param value 
     * @param days 
     */
    setCookie(name: string, value: string, days?: number): void;
    /**
     * [fn.getCookie] 根据name读取cookie
     * @param  name 
     * @return {String}
     */
    getCookie(name: string): string;
    /**
     * [fn.removeCookie] 根据name删除cookie
     * @param name 
     */
    removeCookie(name: string): void;
    /**
      * [fn.chalk] 返回带颜色的字符串
      * @param value 
      * @param color 
      */
    chalk(value: string, color?: 'grey' | 'blue' | 'cyan' | 'green' | 'magenta' | 'red' | 'yellow'): string;
    /**
     * [fn.log] 控制台打印
     * @param value 
     * @param configs {
     * title: string,
     * lineLen: number [20-100]
     * part: 'pre'|'end' (opt.)
     * color: 'grey'|'blue'|'cyan'|'green'|'magenta'|'red'|'yellow'}
     */
    log(value: any, configs?: Object | string): void;
    /**
     * [fn.rd] 读文件
     * @param file
     */
    rd(file: string): string;
    /**
     * [fn.wt] 写文件
     * @param file
     * @param text
     * @param flag ['w'|'a'] default: 'w'
     */
    wt(file: string, text: string, flag?: 'w' | 'a'): void;
    /**
     * [fn.cp] 复制文件或文件夹
     * @param src
     * @param dist
     */
    cp(src: string, dist: string): void;
    /**
     * [fn.mv] 移动文件或文件夹
     * @param src
     * @param dist
     */
    mv(src: string, dist: string): void;
    /**
     * [fn.rm] 删除文件或文件夹
     * @param src
     */
    rm(src: string): void;
    /**
     * [fn.mk] 创建文件夹
     * @param dist
     */
    mk(dist: string): void;
    /**
     * [fn.progress] 进度工具
     */
    progress: Progress;
    /**
     * [fn.extendJquery] jQuery拓展
     * @param jquery
     */
    extendJquery(jquery): void;
}