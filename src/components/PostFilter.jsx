import React from 'react';
import AppInput from "./UI/input/AppInput";
import AppSelect from "./UI/select/AppSelect";


const PostFilter = ({filter, setFilter}) => {

  return (
    <div>
      <AppInput
        value={filter.query}
        onChange={event => setFilter({...filter, query: event.target.value})}
        placeholder='Поиск ...'
      />

      <hr style={{margin: '15px 0'}}/>
      <AppSelect
        value={filter.sort}
        onChange={option => setFilter({...filter, sort: option})}
        defaultOption="Сортировка по"
        options={[
          {value: 'title', name: 'По заголовку'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
    </div>
  );
};

export default PostFilter;