import classNames, {createScopedClass} from '../classnames'

describe('classNames', () => {
    it('接受一个 classNames', () => {
        const result = classNames('a')
        expect(result).toEqual('a')
    })

    it('接受两个 classNames', () => {
        const result = classNames('a', 'b')
        expect(result).toEqual('a b')
    })

    it('接受undefined', () => {
        const result = classNames('a', undefined)
        expect(result).toEqual('a')
    })

    it('接受奇怪字符', () => {
        const result = classNames('a', '中文', null)
        expect(result).toEqual('a 中文')
    })

    it('不接受参数', () => {
        const result = classNames()
        expect(result).toEqual('')
    })
})

describe('createScopedClass', () => {
    it('接受字符串或对象', () => {
        const sc = createScopedClass('vi-layout')
        expect(sc()).toEqual('vi-layout')
        expect(sc('x')).toEqual('vi-layout-x')
        expect(sc({y: true, z: false})).toEqual('vi-layout-y')
        expect(sc({y: true, z: true})).toEqual('vi-layout-y vi-layout-z')
    });
})