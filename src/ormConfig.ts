import {ConnectionOptions} from "typeorm"

const ConnectionOptions: ConnectionOptions = {
    database: "nuber",
    type: "postgres",
    synchronize: true, // 자동 동기화 migration해줌
    logging: true,
    entities: ["entities/**/*.*"],
    host: process.env.DB_ENDPOINT || "localhost",
    port:  5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,

}

export default ConnectionOptions;