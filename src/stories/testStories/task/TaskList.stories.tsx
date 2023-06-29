import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import * as TaskStories from './Task.stories.tsx'
import TaskList from './TaskList.tsx'

// A super-simple mock of the state of the store
export const MockedState = {
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
  status: 'idle',
  error: null,
}
// type MockStoreType = {
//   taskboxState: TaskBoxDataType
//   children: ReactNode
// }
// A super-simple mock of a redux store
//@ts-ignore
const Mockstore = ({ taskboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: 'taskbox',
          initialState: taskboxState,
          reducers: {
            updateTaskState: (state, action) => {
              const { id, newTaskState } = action.payload
              //@ts-ignore
              const task = state.tasks.findIndex(task => task.id === id)

              if (task >= 0) {
                state.tasks[task].state = newTaskState
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
)

export default {
  component: TaskList,
  title: 'TaskList',
  //@ts-ignore
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
}

export const Default = {
  //@ts-ignore
  decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>],
}

export const WithPinnedTasks = {
  decorators: [
    //@ts-ignore
    story => {
      const pinnedtasks = [
        ...MockedState.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
      ]

      return (
        <Mockstore
          taskboxState={{
            ...MockedState,
            tasks: pinnedtasks,
          }}
        >
          {story()}
        </Mockstore>
      )
    },
  ],
}

export const Loading = {
  decorators: [
    //@ts-ignore
    story => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          status: 'loading',
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
}

export const Empty = {
  decorators: [
    //@ts-ignore
    story => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          tasks: [],
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
}
