//❗1) Обязательно импорт должен быть таким, иначе будут ошибки
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

import { baseURL } from '@/app/instance.ts'
import { ForgotArgs, ForgotRes } from '@/features/user/service/user.api.types.ts'

//  2) createApi - это функция, предоставляемая RTK Query,
// которая позволяет создать объект API для взаимодействия с внешними API и управления состоянием приложения
export const userApi = createApi({
  //  3)reducerPath - имя среза (slice) Redux, куда будут сохранены состояние и экшены для этого API.
  reducerPath: 'userApi',
  //  4) baseQuery - конфигурация для HTTP клиента, который будет использоваться для отправки запросов.
  baseQuery: retry(
    fetchBaseQuery({ baseUrl: baseURL, credentials: 'include' }),
    { maxRetries: 1 } // maxRetries будет автоматически повторять запросы в случае возникновения ошибки сети или сервера,
    // пока не будет достигнуто максимальное количество попыток или пока запрос не выполнится успешно.
  ),

  //
  // tagTypes: ['forgot'], //массив имен тегов для типов данных, таких как "Card".
  // keepUnusedDataFor: 50, //время жизни кэша (например при пагинации), по умолчанию 60сек
  // //также keepUnusedDataFor можно задавать для конкретного эндпоинта
  // refetchOnFocus: true, //используется для быстро меняющихся данных.
  // // Пользователь ушёл со страницы, вернулся, данные обновились.
  // refetchOnReconnect: true, //позволяет обновить данные, которые могли измениться во время отсутствия связи.
  // // refetchOnMountOrArgChange: true, //RTK Query будет автоматически выполнять повторные запросы при каждом
  // // монтировании компонента,а также при изменении аргументов запроса,
  // // передаваемых в хук useQuery или useLazyQuery.

  //  endpoints - объект, содержащий эндпоинты для этого API, описанные с помощью функций,
  // которые будут вызываться при вызове соответствующих методов API (например, get, post, put,
  // patch, delete).

  // 1 параметр - тип того, что возвращает сервер (ResultType)
  // 2 параметр - тип query аргументов (QueryArg)

  endpoints: build => {
    return {
      forgotPassword: build.mutation<ForgotRes, ForgotArgs>({
        query: (args: ForgotArgs) => {
          return {
            method: 'POST',
            url: 'auth/forgot',
            body: { ...args },
          }
        },
      }),

      // getCards: build.query<TransformFetchCardsResponseType, ArgGetCardsType>({
      //   query: ({ packId, page, pageCount }) => {
      //     return {
      //       method: 'GET',
      //       url: 'cards/card',
      //       params: {
      //         cardsPack_id: packId,
      //         page: page,
      //         pageCount: pageCount,
      //       },
      //     }
      //   },
      //   // providesTags: ["Cards"], //перечисляющий набор тегов, описывающих данные в этом запросе.
      //   providesTags: result =>
      //     result
      //       ? [
      //           ...result.cards.map(card => ({
      //             //мапим респонс, чтобы query понял у кого какая айдишка для точечной инвалидации
      //             //позволяет не делать повторный запрос  карточек в пагинации, если обновил одну карточку
      //             type: 'Cards' as const,
      //             id: card._id,
      //           })),
      //           'Cards',
      //         ]
      //       : ['Cards'],
      //   transformResponse: (res: FetchCardsResponseType) => {
      //     //изменять данные ответа, получаемые из сети, перед тем как они будут обработаны редьюсером
      //     return {
      //       cards: res.cards,
      //       cardsTotalCount: res.cardsTotalCount,
      //       isPrivatePack: res.packPrivate, // changed name
      //       packUserId: res.packUserId,
      //       packName: res.packName,
      //       packCreated: res.packCreated,
      //       packUpdated: res.packUpdated,
      //       page: res.page,
      //       pageCount: res.pageCount,
      //       minGrade: res.minGrade,
      //       maxGrade: res.maxGrade,
      //     }
      //   },
      // }),
      // addCard: build.mutation<AddCardResponseType, ArgCreateCardType>({
      //   query: card => {
      //     return {
      //       method: 'POST',
      //       url: 'cards/card',
      //       body: { card },
      //     }
      //   },
      //   invalidatesTags: ['Cards'], //перечисляющий набор тегов, которые инвалидируются (обновляются)
      //   // каждый раз при выполнении этой мутации.
      // }),
      // deleteCard: build.mutation<DeleteCardResponseType, ArgDeleteCardType>({
      //   query: ({ packId, cardId, page, pageCount }) => {
      //     return {
      //       method: 'DELETE',
      //       url: 'cards/card',
      //       params: {
      //         id: cardId,
      //       },
      //     }
      //   },
      //   // TODO: optimistic update starts
      //   async onQueryStarted(
      //     // 1 параметр: QueryArg - аргументы, которые приходят в query
      //     { packId, cardId, page, pageCount },
      //     // 2 параметр: MutationLifecycleApi - dispatch, queryFulfilled, getState и пр.
      //     { dispatch, queryFulfilled }
      //   ) {
      //     const patchResult = dispatch(
      //       userApi.util.updateQueryData(
      //         // 1 параметр: endpointName, который мы выполняем после удачного первого запроса (invalidatesTags)
      //         'getCards',
      //         // 2 параметр: QueryArgFrom - параметры, которые приходят в endpoint выше
      //         { packId, page, pageCount },
      //         // 3 параметр: Коллбек функция.
      //         // В данном блоке мы делаем логику, которая должна выполниться синхронно,
      //         // без необходимости дожидаться ответа от сервера.
      //         // Говоря проще пишем здесь логику, которую раньше писали в редьюсере,
      //         // чтобы изменять стейт
      //         draft => {
      //           const index = draft.cards.findIndex(card => card._id === cardId)
      //
      //           if (index !== -1) draft.cards.splice(index, 1)
      //         }
      //       )
      //     )
      //
      //     try {
      //       await queryFulfilled
      //     } catch {
      //       patchResult.undo()
      //     }
      //   },
      //   // TODO : optimistic update ends
      //
      //   invalidatesTags: ['Cards'],
      // }),
      // updateCard: build.mutation<UpdateCardResponseType, ArgUpdateCardType>({
      //   query: card => {
      //     return {
      //       method: 'PUT',
      //       url: 'cards/card',
      //       body: {
      //         card,
      //       },
      //     }
      //   },
      //   // invalidatesTags: ["Cards"],
      //   invalidatesTags: (result, error, card) => [
      //     { type: 'Cards', id: card._id }, //для уточнения конкретной инвалидации передаем id
      //   ],
      // }),
    }
  },
})

//  6) createApi возвращает объект API, который содержит все эндпоинты, определенные в параметре endpoints, а также набор вспомогательных функций, таких как useLazyQuery и usePrefetch.
export const { useForgotPasswordMutation } = userApi
// export const {
//   // useLazyGetCardsQuery
// } = userApi
