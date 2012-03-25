引数が配列でない場合、配列にして返します。 返却例:

- undefinedまたはnullが渡された場合、空の配列を返します。
- 配列が渡された場合、渡された配列をそのまま返します。
- 反復可能な値(<a href="#!/api/Ext-method-isIterable" rel="Ext-method-isIterable" class="docClass">iterable</a>)の場合、配列のコピーを返します。（argumentsやノードリストと同様）
- それ以外の場合は、渡された値を１つ持つ配列を返します。
