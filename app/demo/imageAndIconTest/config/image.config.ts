import { IIconObjModel, IImageObjModel } from "../model/imageAndIcon.model";

export const imageTestData: IImageObjModel[] = [
    {
        "id": crypto.randomUUID(),
        "img": "kadima-jhonathan-1",
        "label": "first image: "
    },
    {
        "id": crypto.randomUUID(),
        "img": "kadima-jhonathan-2",
        "label": "second image: "
    },
    {
        "id": crypto.randomUUID(),
        "img": "kadima-jhonathan-3",
        "label": "third image: "
    }
];

export const iconTestData:IIconObjModel[] = [
    {
        id:crypto.randomUUID(),
        icon:'check',
        label:'first Icon'
    },
    {
        id:crypto.randomUUID(),
        icon:'phone-call',
        label:'second Icon'
    }
]