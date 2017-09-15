
/**
 * seajs配置
 */
seajs.config({
    
    // js目录设置
    base : "/static/v2.0/js",

    // 别名配置
    alias : {
        utils : 'modules/utils',
        editor : 'modules/editor'
    },
    
    // 各js模块文件时间戳控制
    map : [
        ['aixin.js', 'aixin.min.js?t=20160307'],
        ['blog.js', 'blog.min.js?t=20151125'],
        ['editor.js', 'editor.min.js?t=20160307'],
        ['report.js', 'report.min.js?t=20170704'],
        ['shop.js', 'shop.min.js?t=20160307'],
        ['user.js', 'user.min.js?t=20170104'],
        ['utils.js', 'utils.min.js?t=20161129']
    ]
});

/**
 * 常量配置
 */
var t_config = {};
