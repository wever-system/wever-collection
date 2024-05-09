import db from "./db";
import { SqlReturnProps } from "./types";

const sqlExecute = async (
  sql: string,
  params?: any
): Promise<SqlReturnProps> => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        reject({
          result: false,
          error: err,
          data: null,
        });
        return;
      }

      connection.query(sql, params, (err, result) => {
        connection.release();
        if (err) {
          reject({
            result: false,
            error: err,
            data: null,
          });
        } else {
          resolve({
            result: true,
            data: result,
          });
        }
      });
    });
  });
};

export default sqlExecute;
