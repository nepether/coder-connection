import { BelongsTo, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Application, Skill, TalentPostSkill, WorkingGroup } from "..";

@Table
export class TalentPost extends Model {
    @PrimaryKey
    @Column
    id!: number

    @Column(DataType.STRING(300))
    description!: string

    @Default(false)
    @Column
    isPublic!: boolean

    @BelongsTo(() => WorkingGroup)
    workingGroup!: WorkingGroup
    @ForeignKey(() => WorkingGroup)
    @Column
    workingGroupId!: number

    @HasMany(() => Application)
    application?: Application[]

    @BelongsToMany(() => Skill, () => TalentPostSkill)
    skills!: Skill[]
}