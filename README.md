# Mild Dark Theme for Hyper

Theme for [Hyper](https://hyper.is) (previously HyperTerm).

![screenshot](http://zacanger.com/assets/hyperterm.png)

Forked from the [Atom One Dark Theme for HyperTerm](https://github.com/mdo/hyperterm-atom-dark)
by @mdo, which was forked from @jxnblk's
[HyperTerminator](https://github.com/jxnblk/hyperterminator).

AFAICT this was maybe the third theme out there for HyperTerm, so it may not
be taking advantage of newer HyperTerm features or options.

If it doesn't quite suit you, you should check out other themes
[here](https://hyperthemes.matthi.coffee)!

## Install

* `$EDITOR ~/.hyper.js`
* Add `hyperterm-mild-dark` to your plugins array.
* Reload (`CMD+Shift+R`)

## Notes

This theme defaults to fonts with ligatures, if you have them installed (Haskig
and Fira Code; if there are others you like, let me know!). You can disable
ligatures by putting the following snippet in your `~/.hyper.js` under `config`:

```javascript
termCSS: `
  x-screen x-row {
    font-variant-ligatures: none;
  }
`
```
