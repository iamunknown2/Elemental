# Elemental
Remake of the gh-pages branch of Elemental, but with Blockly.

## The Perl script

To create a block which represents an element with tag name `tag_name` with a closing tag as well in the file `blocks.js`, execute

```perl
perl declareNewBlock.pl tag_name
```

If you don't want the closing tag (e.g for `input`, execute

```perl
perl declareNewBlock.pl tag_name --noclosingtag
```

**NOTE: `--noclosingtag` must come after tag_name as the second argument**
