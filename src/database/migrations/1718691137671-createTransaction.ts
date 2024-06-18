import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransaction1718691137671 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            primaryKeyConstraintName: 'pk_transactions_id',
          },
          {
            name: 'source',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'destination',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'amount',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'varchar',
            isNullable: false,
            default: "'pending'",
          },
          {
            name: 'transfer_type',
            type: 'varchar',
            isNullable: false,
          },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', default: 'now()' },
        ],
        indices: [
          {
            columnNames: ['source'],
            name: 'idx_transactions_source',
          },
          {
            columnNames: ['destination'],
            name: 'idx_transactions_destination',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(new Table({ name: 'transactions' }));
  }
}
