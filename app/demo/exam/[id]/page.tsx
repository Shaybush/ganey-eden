'use client';
import { useRef, useState } from 'react';
import { IParmasPropsModel, ISearchParmasPropsModel } from '../models/demo.model';

export default function Exam({
  params,
  searchParams,
}: {
  params: IParmasPropsModel;
  searchParams: ISearchParmasPropsModel;
}) {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [count, setCount] = useState(1);

  // TODO - should learn all hooks
  // useImperativeHandle()
  // useTransition()
  // useId()
  // useLayoutEffect()
  // useMemo()
  // useCallback()

  return (
    <div className='w-96 h-96 border mx-auto'>
      <div>
        {count} <br />
        parmas - id: {params.id} <br /> search params -<br /> count: {searchParams.count},<br /> name:{' '}
        {searchParams.name}
      </div>
      <div>rendered {renderCount.current++} times</div>
      <button
        onClick={() => setCount(count + 1)}
        className='border border-black rounded-lg h-10 bg-red-400 px-2 text-white'
      >
        Increment
      </button>

      <button
        // @ts-ignore
        onClick={() => inputRef.current?.focus()}
        className='border border-black rounded-lg h-10 bg-blue-400 px-2 text-white'
      >
        Focus Input
      </button>

      <input
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
        ref={inputRef}
        className='h-10 w-32 border focus:bg-blue-400'
      />
    </div>
  );
}
